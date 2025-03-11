const min = 0;
const max = 1000000;
const max_guess = 20;

const random_number = getRandomInt(min, max + 1);

let success = 0;
let guess_number = 1;


while(guess_number < max_guess + 1){
    console.log(random_number);
    let guess = prompt("Kérek egy tippet: ");
    if(isNaN(parseInt(guess))){
        alert(guess_number + ". tipp nem talált: A megadott tipp nem egy szám!");
    }
    else{
        if(guess == random_number){
            success = 1;
            break;
        }
        else if(random_number < guess){
            alert(guess_number + ". tipp nem talált: A megoldás kisebb.");
        }
        else{
            alert(guess_number + ". tipp nem talált: A megoldás nagyobb.");
        }
    }
    guess_number++;
}

if(!success){
    alert("Sajnos ez most nem sikerült!");
}
else{
    alert("Gratulálok, " + guess_number + " lépésből eltaláltad!");
}



function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }