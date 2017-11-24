/**
 * @author
 * @version
 * @todo
 */

export class Quiz {

    private questionActive: number = 1;
    private nombreQuestions: number = 3;
    private pointage: number = 0;
    private objJSONQuiz;

    public constructor(objJSON) {

        /*** État initial de l'app ***/
        // On commence par cacher le bouton de soumission du formulaire
        // Celui-ci ne servira QUE pour la version SANS JavaScript
        $('#validerQuiz').hide();

    }

    /**
     *
     * @param {number} no -> le numéro de la question à afficher
     */
    private afficherQuestion(no: number) {

    }

    /**
     *
     * @param {event} evenement -> click
     */
    private cliquerBtnValiderMonChoix(evenement: Event) {

    }

    /**
     *
     * @param {event} evenement -> click
     */
    private cliquerBtnProchaineQuestion(evenement) {

    }
}