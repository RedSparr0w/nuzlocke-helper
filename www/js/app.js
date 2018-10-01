// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'nuzlocke-helper', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  animate: false,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  name: 'main',
  url: '/',
  animate: false,
});
