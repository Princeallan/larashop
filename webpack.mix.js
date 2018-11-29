let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
	'resources/assets/js/app.js'
	], 'public/js')

   .sass('resources/assets/sass/app.scss', 'public/css');

   mix.styles([
   	'public/css/main.css',
   	'public/css/prettyPhoto.css',
   	'public/css/price-range.css',
   	'public/css/responsive.css',
    'public/css/animate.css',
    'public/css/bootstrap.min.css'
], 'public/css/app.css');

mix.scripts([
	'public/js/main.js',
	'public/js/contact.js',
	'public/js/gmaps.js',
	'public/js/html5shiv.js',
	'public/js/jquery.js',
   	'public/js/jquery.scrollUp.min.js',
   	'public/js/jquery.prettyPhoto.js',
   	'public/js/price-range.js',
    'public/js/bootstrap.min.js'
], 'public/js/app.js');
