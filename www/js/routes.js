routes = [
  {
  path: '/',
  async: function (routeTo, routeFrom, resolve, reject) {
    // Router instance
    var router = this;

    // App instance
    var app = router.app;

    // We got user data from request
    var runs = loadStorage('runs', []);

    // Resolve route to load page
    resolve(
      {
        componentUrl: './pages/main.html',
      },
      {
        context: {
          runs: runs,
          games: games,
        }
      }
    );
  },
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/run/:name/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
    var pokemon = {pokemon:[{name: 'just a test'},{name: 'second pokemon'}]};
        var params = {
        name: decodeURIComponent(routeTo.params.name),
      };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/run.html',
          },
          {
            context: {
              run: {...params, ...pokemon},
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
