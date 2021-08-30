////////////////////////////////////
// Section 2 - chap 6
////////////////////////////////////
// var num = 1;
// var chiffre;
// var chiffre2 = 2;
// console.log(num);
// console.log(chiffre);
// console.log(chiffre2 + num);
////////////////////////////////////
// Section 2 - chap 7
////////////////////////////////////
// Camel Case
// var motDePasse = 1234
////////////////////////////////////
// Section 2 - chap 8
////////////////////////////////////
// Ton premier calcul
// console.log(11 + 2);
// console.log(11 - 2);
// console.log(11 * 2);
// console.log(11 / 2);
////////////////////////////////////
// Section 2 - chap 9
////////////////////////////////////
// Les nombres décimaux
// console.log(11,45 + 2);
// console.log(11.45 + 2);
// console.log(0.1 + 0.2);
////////////////////////////////////
// Section 2 - chap 10
////////////////////////////////////
// Les priorités de calcul "*" "/"
// console.log(1 + 2 * 5);
// console.log(1 / 2 + 2 * 5);
// console.log(5*2/4);
////////////////////////////////////
// Section 2 - chap 11
////////////////////////////////////
// Une dernière opération le modulo 
// console.log(10%3);
////////////////////////////////////
// Section 2 - chap 12
////////////////////////////////////
// l'incrémentation
// var num = 0
// num = num + 1
// num++ 
// console.log(num);
////////////////////////////////////
// Section 2 - chap 13
////////////////////////////////////
// var num = 5
// num += 5
// console.log(num);
// var num = 5
// num *= 5
// console.log(num);
// var num = 5
// num /= 5
// console.log(num);
// var num = 5
// num -= 5
// console.log(num);
////////////////////////////////////
// Section 2 - chap 14
////////////////////////////////////
// Les chaînes de caractères
// var texte = "Coucou"
// var texte2 = 'tout le monde,'
// var texte3 = 'je m\'appelle Nicolas'
// console.log(texte + ' ' + texte2 + ' ' + texte3);
////////////////////////////////////
// Section 2 - chap 15
////////////////////////////////////
// Echapper un caractère
// retour à la ligne
// var texte = "Coucou \nNico "
// console.log(texte);
// ajouter une tabulation
// var texte1 = "Coucou \tNico "
// console.log(texte1);
// ajouter un backslash
// var texte2 = "Coucou \\Nico "
// console.log(texte2);
////////////////////////////////////
// Section 2 - chap 16
////////////////////////////////////
// Concaténer des chaînes de caractères
// var bonjour = "Bonjour"
// var nom = "Nicolas"
// console.log(bonjour + ' ' + nom);
// var resultat = bonjour + ' ' + nom 
// console.log(resultat);
// bonjour += ' ' + nom
// console.log(bonjour);
////////////////////////////////////
// Section 2 - chap 17
////////////////////////////////////
// Exercice pratique générer une phrase
// var bonjour = "bonjour"
// var nom = "Nicolas"
// var as ="tu as :"
// var age = 35
// var resultat = "Bonjour " + nom + " tu as " + age + " ans !"
// console.log(bonjour + " " + nom + " " + as + " " + age);
// console.log(resultat);
////////////////////////////////////
// Section 2 - chap 18
////////////////////////////////////
// trouver la taille d'une chaîne de caractère
// var nom = "Nicolas"
// console.log(nom.length);
// console.log("nom".length);
// console.log(nom[2]);
// console.log(nom[nom.length - 2]);
////////////////////////////////////
// Section 2 - chap 19
////////////////////////////////////
// l'immutabilité
// var nom = "Nicolaz"
// nom[nom.length - 1] = "s"
// console.log(nom[nom.length - 1]);
// impossible de venir modifier la chaîne de caractère avec un length
////////////////////////////////////
// Section 2 - chap 20
////////////////////////////////////
// Les arrays
// var nom = "Nicolas"
// var age = 35
// var stats = ["attaque", "defense"]
// var array = [nom, age, stats]
// console.log(array)
////////////////////////////////////
// Section 2 - chap 21
////////////////////////////////////
// Accéder aux données de l'array
// var nom = "Nicolas"
// var age = 35
// var stats = ["attaque", "defense"]
// var array = [nom, age, stats]
// console.log(array[2][1])
// array[0] = "Toto"
// console.log(array)
// array[2][1] = "Puissance"
////////////////////////////////////
// Section 2 - chap 22
////////////////////////////////////
// Trouver la taille d'un array
// console.log(array[0].length);
// console.log("test SSH");
// ////////////////////////////////////
// Section 2 - chap 23
////////////////////////////////////
// ajouter ou supprimer des données dans un array
// var arr = [1,2,3];
// "PUSH" pour ajouter à la fin d'un tableau
// arr.push(4)
// "POP"pour supprimer à la fin d'un tableau
// var pop = arr.pop()
// console.log(arr);
// Une fois le pop stocké dans une variable 
// pop supprime le dernier élément du tableau 
// mais pop = la dernière valeur supprimée
// console.log(pop);
//////////////////////////////////////////////////
// var arr = [1,2,3];
// "UNSHIFT" pour ajouter au début du tableau
// arr.unshift(0);
// console.log(arr);
// "SHIFT" pour supprimer le premier du tableau
// arr.shift(0);
// console.log(arr);
////////////////////////////////////
// Section 2 - chap 24
////////////////////////////////////
// Cas pratique trouver les initiales
// var prenom = "Nicolas"
// var nom = "Marquillier"
// var init = prenom[0] + nom [0]
// var resultat = []
// resultat.push(prenom, nom, init)
// resultat.push(prenom)
// resultat.push(nom)
// resultat.push(init)
// console.log(resultat);
////////////////////////////////////
// Section 2 - chap 25
////////////////////////////////////
// Découverte ds fonctions
// function maFonction(num) {
//   console.log(2 + num);
// }
// maFonction(5)

// function soustraction(a, b) {
//   console.log(a - b);
// }
// soustraction(2, 1)
////////////////////////////////////
// Section 2 - chap 26
////////////////////////////////////
// Le scope
// var num = 5;

// function soustraction() {
//   var num = 7;
//   console.log(num);

//   function test() {
//     var testvar = "test"
//     console.log(testvar);
//   }
//   test()
// }
// soustraction()    
// console.log(num);
////////////////////////////////////
// Section 2 - chap 27
////////////////////////////////////
// Retourner une valeur
// function soustraction(a, b) {
//   return a- b
// }

// var resultat = soustraction(3,8)
// console.log(resultat);
////////////////////////////////////
// Section 2 - chap 28
////////////////////////////////////
// Pratique: Calculer une moyenne
// var note1 = 17
// var note2 = 14
// var moyenne = calculeMoyenne(note1, note2);

// function calculeMoyenne(a, b) {
//   return (a + b) / 2
// }
// console.log(moyenne);
////////////////////////////////////
// Section 2 - chap 29
////////////////////////////////////
// Ecrire des commentaires
// commentaire sur 1 ligne
/* commentaire sur 
plusieurs lignes */

