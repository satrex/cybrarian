var path = require('path'); // $BDI5-(B
var dest = './build'; // $B=PNO@h%G%#%l%/%H%j(B
var src = './src';  // $B%=!<%9%G%#%l%/%H%j(B
var relativeSrcPath = path.relative('.', src);  // $BDI5-(B

module.exports = {
  // $B=PNO@h$N;XDj(B
   dest: dest,
  //
  // js$B$N%S%k%I@_Dj(B
   js: {
     src: src + '/js/**',
     dest: dest + '/js',
     uglify: false
     },
   // webpack$B$N@_Dj(B
   webpack: {
     entry: src + '/js/app.js',
       output: {
         filename: 'bundle.js'
       },
     resolve: {
     extensions: ['', '.js']
       }
     },
   
      stylus: {
          src: [  // $B$b$730It$N(Bcss$B%U%l!<%`%o!<%/;H$&$J$iG[Ns$N@hF,$GFI$_9~$`$HNI$$(B
                src + '/styl/**/!(_)*'  // $B%U%!%$%kL>$N@hF,$,%"%s%9%3$O%S%k%IBP>]30$K$9$k(B
         ],
       dest: dest + '/css/',
       output: 'app.css',  // $B=PNO%U%!%$%kL>(B
       autoprefixer: {
             browsers: ['last 2 versions']
           },
       minify: false
     },

  copy: {
    src: [   // $B:#8e$?$@%3%T!<$9$k%U%!%$%k$,A}$($=$&$J$N$GG[Ns$K$7$F$*$/(B
        src + '/www/index.html'
    ],
    dest: dest
  },
  watch: {
    js: relativeSrcPath + '/js/**',
    styl: relativeSrcPath + '/styl/**',
    www: relativeSrcPath + '/www/index.html'
  }
};
