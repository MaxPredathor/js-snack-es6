/* ************ SNACK 1 *************** */
const invitati = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

const invitatiFormato = [];
let place = 1;
invitati.forEach((Element) =>{
    let pattern = {
                    tableName: 'VIP',
                    guestName: Element,
                    place: place
                  }
    place++
    invitatiFormato.push(pattern);
});
console.log(invitatiFormato);

/* ************ SNACK 2 *************** */

const studenti = [
    {
        Id: 213,
        Name: 'Marco della Rovere',
        Grades: 78
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50
    },
    {
        Id: 120,
        Name: 'Francesco da Polenta',
        Grades: 84
    }       
];

const aula = studenti.map((Element) =>{
    return Element.Name.toUpperCase();
});
console.log(aula);


const votoId = studenti.filter((studente) => (studente.Grades > 70 && studente.Id > 120));
const voto = studenti.filter((studente) => studente.Grades > 70);
console.log(votoId);
console.log(voto);

/* ************ SNACK 3 *************** */
const bici = [
    {
        nome:'Bianchi',
        peso:  100
    },
    {
        nome:'Atala',
        peso:  78
    },
    {
        nome:'Olmo',
        peso:  45
    },
    {
        nome:'Casati',
        peso:  65
    },
    {
        nome:'Colnago',
        peso:  120
    },
    {
        nome:'Bottecchia',
        peso:  34
    },
    {
        nome:'Pistidda',
        peso: 83
    }
];

const biciLeggera = [];
bici.forEach((element, index) => {
    const {peso} = bici[index];
    biciLeggera.push(peso);
});

const result = bici.filter((element) => {
    return element.nome && element.peso === Math.min(...biciLeggera);
})

//  if(element.peso === lowest){
//      biciLeggera.push(element.nome, element.peso)
//  }
console.log(result);

