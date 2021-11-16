const path = require('path')

const mimeTypes = {
  'css' : 'text/css',
  'html' : 'text/html',
  'js' : 'text/js',
  'txt' : 'text/plain',
  'xml' : 'text/xml'
};

module.exports = (filepath) => {
  let ext = path.extname(filepath).split('.').pop().toLowerCase();
  if(!ext) {
    ext = filepath
  }

  return mimeTypes[ext] || mimeTypes['txt']
}
