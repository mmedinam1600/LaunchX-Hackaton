
const helmetConfig = {
  useDefaults: false,
  directives: {
    'script-src': [
      "'self'",
      'https:',
      'http:',
      'cdn.jsdelivr.net',
      'code.jquery.com',
      'connect.facebook.net',
      'facebook.com/tr/',
      '144.126.133.10',
    ],
    'default-src': ["'self'"],
    'base-uri': ["'self'"],
    'style-src': ["'self'", 'https:', 'http:', "'unsafe-inline'"],
    'block-all-mixed-content': [],
    'font-src': ["'self'", 'https:', 'http:', 'data:'],
    'frame-ancestors': ["'self'"],
    'img-src': ["'self'", 'data:'],
    'object-src': ["'none'"],
    //"script-src-attr": ["'none'"],
    //"upgrade-insecure-requests": ["'none'"] //Remover el none y dejar el arreglo vacio cuando tengamos certificado SSL
  }
};

module.exports = {
  helmetConfig
}

