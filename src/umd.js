//
// UMD (https://github.com/umdjs/umd/blob/master/returnExports.js)
// -------------------------------------------------
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {

    //
    // Closure Library
    // -------------------------------------------------
    // Closure Library is a powerful, low level JavaScript library designed
    // for building complex and scalable web applications. It is used by many
    // major Google web applications, such as Gmail and Google Docs.
    //
    // For more information about Closure Library, visit:
    // http://code.google.com/closure/library
    //
    // Closure Library License: https://closure-library.googlecode.com/git/LICENSE
    //


/*%compiledoutput%*/


    // -------------------------------------------------

    return goog;
}));