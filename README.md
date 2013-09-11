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

This was more of an experiment than anything else. There are probably many ways this process could easily get out of hand (duplication of functionality, file size, etc). That said, use at your own discretion.


### Background

I wanted to try [closure-library's userAgent](http://docs.closure-library.googlecode.com/git/closure_goog_useragent_useragent.js.html) in a requirejs project. This was the method I came up with to allow any closure-library "class" to be used as AMD. However, In the end, I chose a smaller AMD library that better fit my needs. 

### Closure Library

Information on Google's Closure Library can be found at: [https://developers.google.com/closure/library/](https://developers.google.com/closure/library/)
