import httplib, urllib

#
# CHANGE THIS to your-modules-name
name_of_module = '';

# Include Requirements
googRequire = open('src/goog.require.js', 'r')
js_code = googRequire.read()

# Include UMD "shell"
umd = open('src/umd.js', 'r')
umd_code = umd.read()

# Send to Closure Compiler for SIMPLE_OPTIMIZATIONS
params = urllib.urlencode([
    ('use_closure_library', 'true'),
    ('js_code', js_code),
    ('output_format', 'text'),
    ('output_info', 'compiled_code'),
    ('compilation_level', 'SIMPLE_OPTIMIZATIONS'),
    ('formatting', 'pretty_print'),
    ('formatting', 'print_input_delimiter'),
  ])
headers = { "Content-type": "application/x-www-form-urlencoded" }
conn = httplib.HTTPConnection('closure-compiler.appspot.com')
conn.request('POST', '/compile', params, headers)
response = conn.getresponse()
closure_lib_code = response.read()
conn.close()

# Combine UMD and Closure Library Code
combined_code = umd_code.replace('/*%compiledoutput%*/', closure_lib_code, 1)

# Write Module
outFileName = 'dist/closure-umd-' + name_of_module
outFile = open(outFileName + '.js', 'w')
outFile.write(combined_code)
outFile.close()