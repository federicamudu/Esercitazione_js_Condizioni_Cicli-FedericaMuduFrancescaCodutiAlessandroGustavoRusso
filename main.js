// Crea due variabili, una che contiene il numero totale dei gatti e una che contiene il numero dei gatti in fila. Scrivi quindi un programma che calcoli: 
// Il numero di file risultanti 
// il numero di gatti mancanti per completare una nuova fila
// quanti gatti rimangono fuori
// In seguito, stampa in console la frase “Ci sono X file di gatti e ne mancano Y per una nuova fila, con un avanzo di Z”

let numTotGatti = 20;
let numGattiFila = 6;

let numFile = Math.floor(numTotGatti/numGattiFila);
let numGattiFuori = numTotGatti % numGattiFila;
let numGattiMancantiFilaIntera = numGattiFila - numGattiFuori;
console.log(numFile);
console.log(numGattiFuori);

console.log(`Ci sono ${numFile} file di gatti e ne mancano ${numGattiMancantiFilaIntera} per una nuova fila, con un avanzo di ${numGattiFuori}`);

// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// se v e’ minore di 18,  stampare in console  “insufficiente”
// se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// se v e’ uguale a 30, stampare in console:  “eccellente”
// Esempio:
// let v = 29;
// Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch.

let voto = 27;

switch (true) {
    case (voto<18):
        console.log('insufficiente');        
        break;
    case (voto >=18 && voto < 21):
        console.log('sufficiente');
        break;
    case(voto >=21 && voto <24):
        console.log('buono');
        break;
    case(voto>=24 && voto < 27):
        console.log('distinto');
        break;
    case(voto>=27 && voto <=29):
        console.log('ottimo');
        break;
    case(voto == 30):
        console.log('eccellente');
        break;
    default:
        break;
}

//let voto=30;
let lode=true;
let bacioAccademico=false;

if(voto>30 || voto<1){
    console.log('metti un voto valido');
}
else if(voto==30 && lode && bacioAccademico){
    console.log('hai preso il massimo');
}
else if(voto==30 && lode){
    console.log('hai preso 30 con lode');
}
else if(voto==30){
    console.log('ottimo');
}
else if(voto<18 && voto>0){
    console.log('bocciato');
}
else if(voto<=21){
    console.log('sufficiente');
}
else if(voto<=25){
    console.log('buono');
}
else if (voto<=29){
    console.log('distinto');
}


// Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:
// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sule e lu ientu”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
// Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.

// let temperatura = parseInt(prompt('Inserisci la temperatura: '));
// if(temperatura<20 && temperatura >=0){
//     alert('non ci sono più le mezze stagioni');
// }
// else if(temperatura>=30){
//     alert('lu mare, lu sule e lu ientu');
// }
// else if(temperatura<30 && temperatura>=20){
//     alert('mi dia una peroni sudata');
// }
// else if(temperatura<0 && temperatura>=-10){
//     alert('non è tanto il freddo quanto l\'umidità');
// }
// else if(temperatura<-10){
//     alert('copriti..ancora ti raffreddi');
// }

//Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

// let num=2;

// for (let i = 0; i <= 10; i++) {
//     console.log(num*i);
// }

// Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.

// let numDisp=0;
// let count=0;

// for (let i = 1; i <= 20; i++) {
//     if(i%2==0){
//         console.log(i);
//     }
//     else{
//         numDisp = numDisp+i;
//         count = count +1;
//     }
// }


// console.log(numDisp);
// console.log(count);

// console.log(`la media dei numeri dispari è ${numDisp/count}`);

// Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:
// l’utente deve poter inserire un numero
// in console dev’essere stampato il messaggio del distributore
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza

// let num;

// do {
//     num =parseInt(prompt('che bevanda vuoi?\n1.Acqua\n2.coca cola\n3.birra'))
//     switch (num) {
//         case 1:
//             alert('E\’ stata selezionata l’acqua');
//             break;
//         case 2:
//             alert('E\’ stata selezionata la cocacola');
//             break;
//         case 3:
//             alert('E\’ stata selezionata la birra');
//             break;
//     }
// } while (num != 3 && num != 1 && num != 2);


