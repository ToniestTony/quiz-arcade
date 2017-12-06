/**
 * @author
 * @version
 * @todo
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Quiz = (function () {
        function Quiz(objJSON) {
            this.questionActive = 1;
            this.nombreQuestions = 3;
            this.pointage = 0;
            /*** État initial de l'app ***/
            // On commence par cacher le bouton de soumission du formulaire
            // Celui-ci ne servira QUE pour la version SANS JavaScript
            $('#validerQuiz').hide();
        }
        /**
         *
         * @param {number} no -> le numéro de la question à afficher
         */
        Quiz.prototype.afficherQuestion = function (no) {
        };
        /**
         *
         * @param {event} evenement -> click
         */
        Quiz.prototype.cliquerBtnValiderMonChoix = function (evenement) {
        };
        /**
         *
         * @param {event} evenement -> click
         */
        Quiz.prototype.cliquerBtnProchaineQuestion = function (evenement) {
        };
        return Quiz;
    }());
    exports.Quiz = Quiz;
});
//# sourceMappingURL=Quiz.js.map