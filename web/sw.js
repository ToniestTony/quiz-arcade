/**
 * Created by etu01 on 17-12-08.
 */
self.addEventListener('install', function(event) {

    event.waitUntil(

        caches.open('quizarcade').then(function(cache) {

            return cache.addAll([
                './',
                './quiz.html',
                './index.html',
                './resultats.php',
                './app.js',
                './sw.js',
                './assets/css/styles.css',

                './assets/fonts/RobotoMono-Regular.ttf',
                './assets/fonts/VT323-Regular.ttf',

                './assets/images/cherry.png',
                './assets/images/grid.jpg',
                './assets/images/orange.png',
                './assets/images/strawberry.png',

                './assets/js/main.js',
                './assets/js/Quiz.js'
            ]);

        })

    );

});

self.addEventListener('fetch', function(event) {

    event.respondWith(caches.match(event.request).then(function(response) {
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one
                var responseClone = response.clone();

                caches.open('quizarcade').then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function () {
                return caches.match('./assets/images/cherry.png');
            });
        }
    }));

});