// Code your solutions in this file
function writeCards(index){
    let cardList = [];
    for (let name of index){
        cardList.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }
    return cardList;
}

function countDown(num){
    for (let i = num; i > -1; i--)
    console.log(i);
}