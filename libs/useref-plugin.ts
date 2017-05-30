// polyfills
import 'core-js';


const useref = require('useref');
const gulp = require('gulp');
const concat = require('gulp-concat');
const nano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const through2 = require('through2');
const path = require('path');
import { Compiler } from 'webpack';

export class UserefPlugin {

  apply (compiler: Compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
          console.log('The compiler is starting a new compilation in UserefPlugin...');
          let result = useref(htmlPluginData.html);
          let templatePath = htmlPluginData.plugin.options.template.split('!').pop();
    
          let base = `${path.dirname(templatePath)}/`;
    
          htmlPluginData.html = result[0];

          let cssKeyArrays = Object.keys(result[1].css || {});
          let jsKeyArrays = Object.keys(result[1].js || {});
    
          cssKeyArrays.forEach(key => {
            gulp.task(key, function () {
              return gulp.src(
                result[1].css[key]['assets'].map(item => base + item),
                { base: base }
              )
                .pipe(concat(key))
                .pipe(nano())
                .pipe(through2.obj(function (chunk, enc, callback) {
                  compilation.assets[chunk.relative] = {
                    size: function() {
                      return chunk.stat.size;
                    },
                    source: function() {
                      return chunk.contents
                    }
                  }
                  callback(null, chunk);
                }))
            })
          });
    
          jsKeyArrays.forEach(key => {
            gulp.task(key, function () {
              return gulp.src(
                result[1].js[key]['assets'].map(item => base + item),
                { base: base }
              )
                .pipe(concat(key))
                .pipe(uglify())
                .pipe(through2.obj(function (chunk, enc, callback) {
                  compilation.assets[chunk.relative] = {
                    size: function() {
                      return chunk.stat.size;
                    },
                    source: function() {
                      return chunk.contents;
                    }
                  }
                  callback(null, chunk);
                }))
            })
          });
    
          if (cssKeyArrays.length > 0 && jsKeyArrays.length > 0) {
            runSequence(cssKeyArrays, jsKeyArrays, function () {
              callback(null, htmlPluginData);
            });
          } else if (cssKeyArrays.length > 0) {
            runSequence(cssKeyArrays, function () {
              callback(null, htmlPluginData);
            });
          } else if (jsKeyArrays.length > 0) {
            runSequence(jsKeyArrays, function () {
              callback(null, htmlPluginData);
            });
          } else {
            callback(null, htmlPluginData);
          }
        });
      });
  }
}


