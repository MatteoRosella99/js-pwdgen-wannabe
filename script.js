//Variabili

var nome;
var cognome;
var colore;
var risultato;
var min, max, numero;

//Calcolo numero random
min = Math.ceil(0);
max = Math.ceil(99);
numero = Math.floor(Math.random(1) * (max - min)) + min;

//Script
nome = prompt("Inserisci il tuo nome");//inserimento nome utente
cognome = prompt("Inserisci il tuo Cognome");//inserimento cognome utente
colore = prompt("Inserisci il tuo colore preferito");//inserimento colore preferito

//calcoli
risultato = nome + cognome + colore + numero// calcolo del risultato

//Alert
alert("La tua password generata é " + risultato);//output per l'utente
