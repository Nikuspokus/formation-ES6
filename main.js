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
// /* commentaire sur 
// plusieurs lignes */
////////////////////////////////////
// Section 2 - chap 30
////////////////////////////////////
// Comprendre les boolean
// vrai = true || faux = false
// console.log(2 == 2);
// var a = 1
// var b = 2
// console.log(a == b);
// console.log(a != b);
////////////////////////////////////
// Section 2 - chap 31
////////////////////////////////////
// La consition ternaire
// var a = 1
// var b = 2
// console.log(a == b ? "vrai" : "faux");
// var age = 16
// var majeur = 18
// console.log(age == majeur ? "Entre" : "Sors");
////////////////////////////////////
// Section 2 - chap 32
////////////////////////////////////
// Les opérateurs
// var age = 19
// var majeur = 18
// console.log(1 == 1 && 1 == 2);
// console.log(1 == 1 || 1 == 2);
// console.log(1 == 1 && 1 < 2 ? "OK" : "Pas Ok");
////////////////////////////////////
// Section 2 - chap 33
////////////////////////////////////
// Le mode strict
// console.log(1 == "1");
// console.log(1 === "1");
////////////////////////////////////
// Section 2 - chap 34
////////////////////////////////////
// La condition if/else
// function esTuFort(force) {
//   if (force >= 15) {
//       return"Tu es très fort"
//   } else if (force >= 10) {
//       return "Tu es fort"
//   } else if (force >= 5) {
//       return "Tu es faible"
//   }
//   else {
//     return "non"
//   }
// }
// console.log(esTuFort(15));
// console.log(esTuFort(10));
// console.log(esTuFort(5));
////////////////////////////////////
// Section 2 - chap 35
////////////////////////////////////
// Pratique : Calculer une moyenne (V2)
// function niveau(arr) {
//   var moyenne = (arr[0] + arr[1] + arr[2]) / arr.length;
//   if (moyenne >= 15) {
//     return "Très bien !";
//   } 
//   else if (moyenne >= 10) {
//     return "Bien !";
//   } 
//   return "Convocation des parents";
// }
// console.log(niveau([5,6,2]));
////////////////////////////////////
// Section 2 - chap 36
////////////////////////////////////
// Les objets
// var chevalier = {
//   "force": 15,
//   "vitesse": 10,
//   "faiblesse": ["mage", "ninja"]
// };
// var requete = "force"
// console.log(chevalier.faiblesse);
// console.log(chevalier.faiblesse[0]);
////////////////////////////////////
// Section 2 - chap 37
////////////////////////////////////
// manipuler les objets
// var chevalier = {
//   "force": 15,
//   "vitesse": 10,
//   "faiblesse": ["mage", "ninja"]
// };
// chevalier.force = 20
// chevalier.arme = "épée"
// var requete = "force"
// console.log(chevalier.faiblesse[1]);
// console.log(chevalier.force);
// console.log(chevalier.arme);
// console.log(chevalier);
// delete chevalier.arme
// console.log(chevalier);
////////////////////////////////////
// Section 2 - chap 38
////////////////////////////////////
// manipuler les objets
// var chevalier = {
//   "force": 15,
//   "vitesse": 10,
//   "faiblesse": ["mage", "ninja"],
//   "compagnon": {
//     "animal": "dragon",
//     "aide": "écuyer"
//   }
// };
// chevalier.force = 20
// chevalier.arme = "épée"
// delete chevalier.arme
// var requete = "force"
// hasOwnProperty permet de savoir si la propryété en paramètre existe dans mon objet
// console.log(chevalier.hasOwnProperty("force"));
// console.log(chevalier.hasOwnProperty("arme"));
// console.log(chevalier.compagnon.animal);
// console.log(chevalier.compagnon.aide);
////////////////////////////////////
// Section 2 - chap 39
////////////////////////////////////
// La boucle while
// var i = 0;
// var triangle = []
// //while = tant que
// while (i < 10) {
//   i++;
//   triangle.push("*")
//   console.log(triangle);
// }
////////////////////////////////////
// Section 2 - chap 40
////////////////////////////////////
// La boucle for
// var triangle = []
// for (i = 10; i >= 0; i-=2) {
//   triangle.push("*")
//   console.log(triangle);
// }
////////////////////////////////////
// Section 2 - chap 41
////////////////////////////////////
// Application concrète d'une boucle for
// var arr = [10, 5, 15, 7];
// var total = 0;

// for (var i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// console.log(total);
////////////////////////////////////
// Section 2 - chap 42
////////////////////////////////////
// Pratique: Calculer mayenne (V3)
// function moyenne(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total += arr[i]
//   }
//   return total / arr.length
// }
// console.log(moyenne([15,7,8,14]));
/////////////////////////////////
// Section 2 - chap 43
////////////////////////////////////
// Une boucle dans une boucle
// function plusUn(arr) {
//   for(i = 0; i < arr.length; i++) {
//     for(j = 0; j < arr[i].length; j++) {
//       arr[i][j] += 1
//     }
//   }
//   return arr;
// }
// console.log(plusUn([[1,2],[3,4],[5,6]]));
/////////////////////////////////
// Section 2 - chap 44
////////////////////////////////////
// Générer un nombre aléatoire
// var random = Math.random() * 6;
// floor permet de récupérer l'entier de la valeur du random
//  le +1 évite d'avoir 0 en résultat 
// var random = Math.floor(Math.random() * 6 + 1);
// console.log(random);
/////////////////////////////////
// Section 2 - chap 45
////////////////////////////////////
// Générer un nombre aléatoire dans un rang
// function rangRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(rangRandom(5, 10));
/////////////////////////////////
// Section 2 - chap 46
////////////////////////////////////
// Mélanger un array
// function randomize(arr) {
//   var temp = 0;
//   var random = 0;

//   for (i = 0;i < arr.length; i++) {
//     random = Math.floor(Math.random() * arr.length);
//     temp = arr[i];
//     arr[i] = arr[random];
//     arr[random] = temp
//   }
//   return arr;
// }
// console.log(randomize([1,2,3,4,5]));
/////////////////////////////////
// Section 2 - chap 47
////////////////////////////////////
// Découverte de la méthode Map
// var arr = [1, 2, 3, 4, 5]
// var arrPlusUn = arr.map(function(nombre) {
//   return nombre +1
// })
// console.log(arr);
// console.log(arrPlusUn);
/////////////////////////////////
// Section 3 - chap 48
////////////////////////////////////
// La nouveauté de JavaScript
