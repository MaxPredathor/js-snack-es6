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
let i = 1;
invitati.forEach((Element) =>{
    let pattern = {
                    tableName: 'VIP',
                    guestName: Element,
                    place: i
                  }
    i++
    invitatiFormato.push(pattern);
});
console.log(invitatiFormato);