/**
 * Created by etu01 on 17-12-08.
 */

// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
    // We pass a promise to event.waitUntil to signal how
    // long install takes, and if it failed
    event.waitUntil(
        // We open a cache…
        caches.open('simple-sw-v1').then(function(cache) {
            // And add resources to it
            return cache.addAll([
                './',
                './quiz.html',
                './index.html',
                './assets/css/styles.css',

                './assets/fonts/RobotoMono-Regular.ttf',
                './assets/fonts/VT323-Regular.ttf',

                './assets/images/cherry.png',
                './assets/images/grid.jpg',
                './assets/images/orange.png',
                './assets/images/strawberry.png',

                './logging.js',
                './bower_components/jquery/dist/jquery.min.js',
                './bower_components/picturefill/dist/picturefill.min.js',
                './bower_components/requirejs/require.js',

                //bower components: jquery.min.js / require / picture fill / polyfill

                './assets/js/main.js',
                './assets/js/Quiz.js',

                './assets/js/jquery-3.2.1.min.js'
            ]);
        })
    );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
    // Calling event.respondWith means we're in charge
    // of providing the response. We pass in a promise
    // that resolves with a response object
    event.respondWith(
        // First we look for something in the caches that
        // matches the request
        caches.match(event.request).then(function(response) {
            // If we get something, we return it, otherwise
            // it's null, and we'll pass the request to
            // fetch, which will use the network.
            return response || fetch(event.request);
        })
    );
});