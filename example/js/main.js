define(['../../dist/closure-umd-userAgentExample'],
function(goog) {

  // This code comes from the closure-library demos
  // http://closure-library.googlecode.com/git/closure/goog/demos/useragent.html


/*
Copyright 2010 The Closure Library Authors. All Rights Reserved.

Use of this source code is governed by the Apache License, Version 2.0.
See the COPYING file for details.
*/

  var platformFields = [
    'LINUX',
    'MAC',
    'WINDOWS',
    'X11',
    'PLATFORM'
  ];

  var rendererFields = [
    'GECKO',
    'IE',
    'OPERA',
    'WEBKIT',
    'VERSION'
  ];

  var productFields = [
    'ANDROID',
    'CAMINO',
    'CHROME',
    'FIREFOX',
    'IE',
    'IPAD',
    'IPHONE',
    'OPERA',
    'SAFARI',
    'VERSION'
  ];

  // Public members in goog.userAgent.flash
  var flashFields = [
    'HAS_FLASH',
    'VERSION'
  ];

  // Public members in goog.userAgent.picasa
  var picasaFields = [
    'HAS_PICASA',
    'VERSION'
  ];

  // Public members in goog.userAgent.iphoto
  var iphotoFields = [
    'HAS_IPHOTO',
    'VERSION'
  ];

  // Public members in goog.userAgent.jscript
  var jscriptFields = [
    'HAS_JSCRIPT',
    'VERSION'
  ];

  // Public members in goog.userAgent.adobeReader
  var adobeReaderFields = [
    'HAS_READER',
    'SILENT_PRINT',
    'VERSION'
  ];

  /**
   * Adds a list of user-agent properties and their values to the output table.
   * @param {Element} parent The table body to append new rows to
   * @param {string} title The header for this table section
   * @param {Object} ns The Closure namespace to read properties from
   * @param {Array.<string>} A list of properties to read from that namespace
   */
  function addSection(parent, title, ns, properties) {
    goog.dom.appendChild(
        parent,
        goog.dom.createDom('tr',
                           null,
                           goog.dom.createDom('th',
                                              {'colspan': 2, 'class': 'section'},
                                              title)));

    goog.array.forEach(
        properties,
        function(p) {
          addValue(parent, p.toLowerCase(), ns[p]);
        })
  }


  /**
   * Adds a name/value row to the table.
   * @param {Element} parent The table body to append the row to
   * @param {string} name The name of the property
   * @param {string|boolean} value The value to display
   */
  function addValue(parent, name, value) {
    var row = goog.dom.createElement('tr');
    goog.dom.appendChild(parent, row);

    var nameCell = goog.dom.createDom('th', null, name);
    goog.dom.appendChild(row, nameCell);

    var valueCell = goog.dom.createElement('td');
    goog.dom.appendChild(row, valueCell);

    if (goog.isBoolean(value)) {
      value = value ? 'yes' : 'no';
      goog.dom.setTextContent(valueCell, value);
      goog.dom.classes.set(valueCell, value);
    } else {
      goog.dom.setTextContent(valueCell, value);
      if (!value) {
        goog.dom.classes.set(valueCell, 'no');
      }
    }
  }


  var browser = goog.dom.getElement('browserFields');
  addSection(browser, 'Hardware Platform', goog.userAgent, platformFields);
  addSection(browser, 'Renderer', goog.userAgent, rendererFields);
  addSection(browser, 'Product', goog.userAgent.product, productFields);

  var features = goog.dom.getElement('featureFields');
  addSection(features, 'Adobe Reader Detection', goog.userAgent.adobeReader,
      adobeReaderFields);
  addSection(features, 'Flash Plugin', goog.userAgent.flash, flashFields);
  addSection(features, 'iPhoto Detection', goog.userAgent.iphoto, iphotoFields);
  addSection(features, 'Microsoft JScript', goog.userAgent.jscript,
      jscriptFields);
  addSection(features, 'Picasa Detection', goog.userAgent.picasa, picasaFields);

});