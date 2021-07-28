// Code your solutions in this file
function writeCards(array, eventName) {
    let thankYouCards= []
    for(let i = 0; i < array.length; i++){
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
  return thankYouCards
}

function countDown(number) {
    let i = number
    while(i >= 0){
        console.log(i)
        i--
    }

}