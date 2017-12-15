/**
 * @author
 * @version
 * @todo
 * make quiz
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

        $(".btnJS").append(`
            <button
            disabled 
            type="button"
            class="btnHide">Veuillez choisir une réponse</button>`);

        this.objJSONQuiz=objJSON;

        $("#Q"+this.questionActive+" .choixReponses input").unbind().on("click",this.afficherValider.bind(this));

        //afficher question
        this.afficherQuestion(this.questionActive);
    }


    /**
     *
     * @param {number} no -> le numéro de la question à afficher
     */
    private afficherQuestion(no: number) {
        if (no >= 1 && no <= 3) {
            let section = $("#Q" + no);
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
    }


        /**
     *
     * @param {number} no -> le numéro de la question à afficher
     */
    private afficherValider() {
        let no=this.questionActive;

        let section=$("#Q"+no);

        let btn=section.find(".btnJS");

        //verifier si le bouton valider n'existe pas deja
        if(btn.find(".btnProgression").length==0){
            //ajouter bouton valider
            btn.append(`
            <button
            type="button"
            data-cible="#${++no}"
            name="btn_Submit"
            class="btnProgression">Valider</button>`);
            btn.find(".btnProgression").on("click",this.cliquerBtnValiderMonChoix.bind(this));
        }

        btn.find(".btnHide").hide();

    }

    /**
     *
     * @param {event} evenement -> click
     */
    private cliquerBtnValiderMonChoix(evenement: Event) {
        //variables utiles
        let bouton=$("#Q"+this.questionActive+" .btnProgression");
        let radioSelected = $("#Q"+this.questionActive+" li input:checked");
        let section=$("#Q"+this.questionActive);
        let retroaction=section.find(".retroaction");

        //verifier bonne réponse
        if(radioSelected.val()==1){
            //bonne reponse
            retroaction.find("h3").addClass("bonneReponse").text(this.objJSONQuiz['retroactions']['positive']);
            this.pointage++;
        }else{
            //mauvaise reponse
            let retroaction=section.find(".retroaction");
            retroaction.find("h3").addClass("mauvaiseReponse").text(this.objJSONQuiz['retroactions']['negative']);
        }
        $("#Q"+this.questionActive+" li input[value='1']").addClass("bonneValidation");

        retroaction.find("p").text(this.objJSONQuiz["explications"]["Q"+this.questionActive]);
        retroaction.find("span").text(this.questionActive+"/"+this.nombreQuestions+" questions répondues");

        //enlever événement des boutons radios
        $("#Q"+this.questionActive+" .choixReponses input").unbind();
        $("#Q"+this.questionActive+" .choixReponses input").attr("disabled","disabled");

        //changer le bouton valider pour prochaine question
        if(this.questionActive>=this.nombreQuestions){
            //derniere question
            bouton.unbind();
            bouton.hide();
            $("#validerQuiz").show();
            /*$(".choixReponses input").show();
            $(".choixReponses input").removeAttr("disabled");*/

        }else{
            bouton.text("Prochaine question");
            bouton.unbind();
            bouton.on("click",this.cliquerBtnProchaineQuestion.bind(this));
        }

    }

    /**
     *
     * @param {event} evenement -> click
     */
    private cliquerBtnProchaineQuestion(evenement) {
        this.questionActive++;

        //activer les prochains boutons radios
        //btn invisible
        $("#Q"+this.questionActive+" .btnJS .btnHide").show();
        $("#Q"+this.questionActive+" .choixReponses input").unbind().on("click",this.afficherValider.bind(this));

        this.afficherQuestion(this.questionActive);

        //changer derniere question pour SECTION js
    }
}