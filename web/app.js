/**
 * Created by etu01 on 17-12-08.
 */
//SERVICE WORKER

// Enregistrer le service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).then(function(reg) {

        if(reg.installing) {
            console.log('Service worker en processus d\'installation');
        } else if(reg.waiting) {
            console.log('Service worker installé');
        } else if(reg.active) {
            console.log('Service worker activé');
        }

    }).catch(function(error) {
        // registration failed
        console.log('L\'enregistrement a échoué à cause de l\erreur: ' + error);
    });
}


var Path = './';
var Gallery = { 'images' : [

    {
        'nom'  : 'Cherry',
        'alt' : 'Une cerise.',
        'url': '/assets/images/cherry.png',
    }

]};
var imgSection = document.querySelector('section');

/**
 * fonction pour charger chaque image avec XHR
 * @param imgJSON un objet JSON décrivant le nom, le alt, l'url et les crédits d'une image
 * @return {Promise}
 */
function chargerImage(imgJSON) {

    // retourne une promesse pour le chargement d'une image
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', Path + imgJSON.url);
        request.responseType = 'blob';
        // Un objet Blob représente un objet, semblable à un fichier, qui est immuable et qui contient des données brutes.

        request.onload = function() {
            if (request.status == 200) {
                var arrReponse = [];
                arrReponse['image'] = request.response;
                arrReponse['imgJSON'] = imgJSON;
                resolve(arrReponse);
            } else {
                reject(Error('L\'image ne s\'est pas chargée correctement. Le code d\'erreur est:' + request.statusText));
            }
        };

        request.onerror = function() {
            reject(Error('Il y a eu une erreur réseau.'));
        };

        request.send();
    });
}

function initialiser(){

    // charger chaque ensemble d'image, texte alternatif et bas de vignette
    for(var intCpt = 0; intCpt<=Gallery.images.length-1; intCpt++) {
        chargerImage(Gallery.images[intCpt]).then(function(arrReponse) {

            var image = document.createElement('img');
            var figure = document.createElement('figure');
            var basDeVignette = document.createElement('figcaption');
            var imageURL = window.URL.createObjectURL(arrReponse['image']);

            image.src = imageURL;
            image.setAttribute('alt', arrReponse['imgJSON'].alt);
            basDeVignette.innerHTML = '<strong>' + arrReponse['imgJSON'].nom + '</strong>: Prise par ' + arrReponse['imgJSON'].credit;

            imgSection.appendChild(figure);
            figure.appendChild(image);
            figure.appendChild(basDeVignette);

        }, function(Error) {
            console.log(Error);
        });
    }
}

window.onload = initialiser();