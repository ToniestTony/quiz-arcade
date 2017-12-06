define(["require", "exports", "./Quiz"], function (require, exports, Quiz_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    $('body').addClass('js');
    fetch('assets/js/objJSONquiz.json')
        .then(function (data) { return data.json(); })
        .then(function (data) {
        console.timeEnd('fetching data');
        //const objValidations = new Validations(data, 'fInscription');
        var objQuiz = new Quiz_1.Quiz(data);
    });
});
/*window.onhashchange = function() {
    window.location.hash ? null : window.location.hash ="#1";
    objBarreProgressionEtapes.afficherEtapeCourante(window.location.hash);
};*/
//# sourceMappingURL=main.js.map