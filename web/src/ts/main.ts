import { Quiz } from './Quiz';

$('body').addClass('js');

fetch('assets/js/objJSONquiz.json')
    .then(data => data.json())
    .then((data) => {
        console.timeEnd('fetching data');
        //const objValidations = new Validations(data, 'fInscription');
        const objQuiz = new Quiz(data);
    });

/*window.onhashchange = function() {
    window.location.hash ? null : window.location.hash ="#1";
    objQuiz.afficherEtapeCourante(window.location.hash);
};*/