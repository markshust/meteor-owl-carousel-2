Package.describe({
  name: 'markoshust:owl-carousel-2',
  version: '2.0.0-beta.3',
  summary: 'Owl Carousel 2',
  git: 'https://github.com/markoshust/meteor-owl-carousel-2',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
    'jquery@1.11.4'
  ]);
  api.addFiles([
    'lib/owl.carousel.min.js',
    'lib/owl.carousel.min.css'
  ], 'client');
  api.export('Owl', 'client');
});
