<?php
/**
 * NOTE: cette page n'est utilisée que dans le cas d'une expérience utilisateur SANS JavaScript
 * @todo
 */
$pointage=0;
if (isset($_GET['validerQuiz'])) {
    // si tout est OK on affiche les résultats du Quiz
    // et un bouton (un lien en fait) pour recommencer
    if(isset($_GET['Q1']) && $_GET['Q1']=='1'){
        $pointage++;
    }

    if(isset($_GET['Q2']) && $_GET['Q2']=='1'){
        $pointage++;
    }

    if(isset($_GET['Q3']) && $_GET['Q3']=='1'){
        $pointage++;
    }
    
}
$pourcentage=round(($pointage/3)*100);


?>
<!DOCTYPE html>
<html lang="fr">
<head>


    <!--ICONS-->
    <link rel="apple-touch-icon" sizes="57x57" href="assets/app-icones/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="assets/app-icones/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/app-icones/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/app-icones/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/app-icones/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/app-icones/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="assets/app-icones/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/app-icones/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/app-icones/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="assets/app-icones/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/app-icones/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="assets/app-icones/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/app-icones/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#000000">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Quiz arcade - Intro</title>

    <link rel="stylesheet" href="assets/css/styles.css">

</head>

<body>
<!--Lien rapide à ajouter-->
<div class="">
    <main class="conteneur intro">
        <header role="banner">
            <div class="banner">
                <h1 class="title">Quiz Arcade</h1><br>
                <span class="subtitle">Un quiz sur l'âge d'or des jeux vidéo!</span>
            </div>
        </header>

    <?php if($pointage==0){ ?>
        <h2>Malheureusement, </h2><p>vous n'avez eu aucun point, meilleure chance la prochaine fois!</p>
    <?php }else{ ?>
        <h2>Bravo, </h2><p>vous avez eu <?php echo $pointage; ?> sur 3 questions (<?php echo $pourcentage; ?>) !</p>
    <?php } ?>
    <p><a href="quiz.html">Commencer le quiz</a></p>
</main>
<footer role="contentinfo">
    <small>pied de page Antoine Beaulieu Savard droits d'auteur sur le matériel utilisé, année]</small>
</footer>
</div>

<script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>

<script> window.jQuery || document.write('<script src="bower_components/jquery/dist/jquery.min.js">\x3C/script>')</script>
<script src="bower_components/picturefill/dist/picturefill.min.js" async></script>

</body>

</html>
