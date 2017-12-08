/**
 * @author
 * @version
 * @todo
 * make quiz
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
            this.objJSONQuiz = objJSON;
            $("#Q" + this.questionActive + " .choixReponses input").unbind().on("click", this.afficherValider.bind(this));
            //afficher question
            this.afficherQuestion(this.questionActive);
        }
        /**
         *
         * @param {number} no -> le numéro de la question à afficher
         */
        Quiz.prototype.afficherQuestion = function (no) {
            if (no >= 1 && no <= 3) {
                var section = $("#Q" + no);
                $(".section").hide();
                section.show();
                // let btn=section.find(".btnJS");
                // btn.append(`
                // <button
                // type="button"
                // data-cible="#${++no}"
                // name="btn_Submit"
                // class="btnProgression">Continuer</button>`);
                // btn.find(".btnProgression").on("click",this.avancerProchainEtape)
            }
        };
        /**
     *
     * @param {number} no -> le numéro de la question à afficher
     */
        Quiz.prototype.afficherValider = function () {
            console.log(this.questionActive);
            var no = this.questionActive;
            var section = $("#Q" + no);
            var btn = section.find(".btnJS");
            //verifier si le bouton valider n'existe pas deja
            if (btn.find(".btnProgression").length == 0) {
                //ajouter bouton valider
                btn.append("\n            <button\n            type=\"button\"\n            data-cible=\"#" + ++no + "\"\n            name=\"btn_Submit\"\n            class=\"btnProgression\">Valider</button>");
                btn.find(".btnProgression").on("click", this.cliquerBtnValiderMonChoix.bind(this));
            }
            btn.find(".btnHide").hide();
        };
        /**
         *
         * @param {event} evenement -> click
         */
        Quiz.prototype.cliquerBtnValiderMonChoix = function (evenement) {
            //variables utiles
            var bouton = $("#Q" + this.questionActive + " .btnProgression");
            var radioSelected = $("#Q" + this.questionActive + " li input:checked");
            var section = $("#Q" + this.questionActive);
            var retroaction = section.find(".retroaction");
            //verifier bonne réponse
            if (radioSelected.val() == 1) {
                //bonne reponse
                retroaction.find("h3").addClass("bonneReponse").text(this.objJSONQuiz['retroactions']['positive']);
                this.pointage++;
            }
            else {
                //mauvaise reponse
                var retroaction_1 = section.find(".retroaction");
                retroaction_1.find("h3").addClass("mauvaiseReponse").text(this.objJSONQuiz['retroactions']['negative']);
            }
            retroaction.find("p").text(this.objJSONQuiz["explications"]["Q" + this.questionActive]);
            retroaction.find("span").text(this.questionActive + "/" + this.nombreQuestions + " questions répondues");
            //enlever événement des boutons radios
            $("#Q" + this.questionActive + " .choixReponses input").unbind();
            $("#Q" + this.questionActive + " .choixReponses input").attr("disabled", "disabled");
            //changer le bouton valider pour prochaine question
            if (this.questionActive >= this.nombreQuestions) {
                //derniere question
                bouton.unbind();
                bouton.hide();
                $("#validerQuiz").show();
                $(".choixReponses input").show();
                $(".choixReponses input").removeAttr("disabled");
            }
            else {
                bouton.text("Prochaine question");
                bouton.unbind();
                bouton.on("click", this.cliquerBtnProchaineQuestion.bind(this));
            }
        };
        /**
         *
         * @param {event} evenement -> click
         */
        Quiz.prototype.cliquerBtnProchaineQuestion = function (evenement) {
            this.questionActive++;
            /*
             ________________.___._____________________ ____________________________.________________________
             \__    ___/\__  |   |\______   \_   _____//   _____/\_   ___ \______   \   \______   \__    ___/
                 |    |    /   |   | |     ___/|    __)_ \_____  \ /    \  \/|       _/   ||     ___/ |    |
                 |    |    \____   | |    |    |        \/        \\     \___|    |   \   ||    |     |    |
                 |____|    / ______| |____|   /_______  /_______  / \______  /____|_  /___||____|     |____|
                           \/                         \/        \/         \/       \/
             TEST
             2
             2
             2
             3
             4
             5
    
    
    
             */
            //activer les prochains boutons radios
            //btn invisible
            $("#Q" + this.questionActive + " .btnJS .btnHide").show();
            $("#Q" + this.questionActive + " .choixReponses input").unbind().on("click", this.afficherValider.bind(this));
            this.afficherQuestion(this.questionActive);
        };
        return Quiz;
    }());
    exports.Quiz = Quiz;
});
//# sourceMappingURL=Quiz.js.map