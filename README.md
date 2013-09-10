closure-UMD-builder
=========================

Build Script to wrap compiled closure-code into an AMD/UMD module.

## Usage

1. Change **/src/goog.require.js** to include the closure-library "classes" you need.
2. Change **name_of_module** variable in *build.py* to whatever your module's name is.
3. Run **/build.py**
    - *NOTE*: You will need to install python if you don't already have it ([http://www.python.org/getit/](http://www.python.org/getit/)).
4. The file will be written to **/dist/closure-umd-<name_of_module\>.js**
    - *NOTE*: This tool only does SIMPLE_OPTIMIZATIONS with the closure compiler you will still want to minify during your normal build step.

### :warning: Don't Hurt Yourself...

The file-size cost of including even a few closure-library modules/"classes" can be very high depending on what you include. Make sure you know what you are doing and perhaps consider using the closure library to build your application.


### Background

I wanted to try [closure-library's userAgent](http://docs.closure-library.googlecode.com/git/closure_goog_useragent_useragent.js.html) in a requirejs project, but didn't see an easy way to make this happen. This is my solution in a reusable format. I did noticed an [output_wrapper](https://code.google.com/p/closure-compiler/wiki/FAQ#When_using_Advanced_Optimizations,_Closure_Compiler_adds_new_var) option for the closure compiler, but could not get it to work with the [Service API](https://developers.google.com/closure/compiler/docs/api-ref).

### Closure Library

Information on Google's Closure Library can be found at: [https://developers.google.com/closure/library/](https://developers.google.com/closure/library/)