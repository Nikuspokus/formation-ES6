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
var nom = "Nicolas"
var age = 35
var stats = ["attaque", "defense"]
var array = [nom, age, stats]
console.log(array)
////////////////////////////////////
// Section 2 - chap 21
////////////////////////////////////
// Accéder aux données de l'array
var nom = "Nicolas"
var age = 35
var stats = ["attaque", "defense"]
var array = [nom, age, stats]
console.log(array[2][1])
array[0] = "Toto"
console.log(array)
array[2][1] = "Puissance"
////////////////////////////////////
// Section 2 - chap 22
////////////////////////////////////
// Trouver la taille d'un array
console.log(array[0].length);
