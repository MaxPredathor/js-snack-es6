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

const inivtatiFormato = [];

let i = 1;
invitati.forEach((Element) =>{
    let pattern = {
                    tableName: 'VIP',
                    guestName: Element,
                    place: i
                }
i++
inivtatiFormato.push(pattern);
})
console.log(inivtatiFormato);