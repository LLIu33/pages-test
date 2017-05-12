/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */

angular.module("app").config([
  "$stateProvider",
  "$urlRouterProvider",
  "$ocLazyLoadProvider",

  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/app/home");

    $stateProvider
      .state("app", {
        abstract: true,
        url: "/app",
        templateUrl: "tpl/app.html",
        resolve: {
          deps: [
            "$ocLazyLoad",
            function($ocLazyLoad) {
              return $ocLazyLoad
                .load(["dataTables", "ui-grid"], {
                  insertBefore: "#lazyload_placeholder"
                })
                .then(function() {
                  return $ocLazyLoad.load(
                    "assets/js/controllers/dataTables.js"
                  );
                });
            }
          ]
        }
      })
      .state("app.dashboard", {
        url: "/home",
        templateUrl: "tpl/home.html",
        controller: "HomeCtrl",
        resolve: {
          deps: [
            "$ocLazyLoad",
            function($ocLazyLoad) {
              return $ocLazyLoad
                .load(
                  [
                    /*
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                  ],
                  {
                    insertBefore: "#lazyload_placeholder"
                  }
                )
                .then(function() {
                  return $ocLazyLoad.load(["assets/js/controllers/home.js"]);
                });
            }
          ]
        }
      })
      .state("access", {
        url: "/access",
        template: '<div class="full-height" ui-view></div>'
      })
      .state("access.login", {
        url: "/login",
        templateUrl: "tpl/extra_login.html"
      });
  }
]);
