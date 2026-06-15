for(;;) {  

    let randomNum = Math.floor(Math.random() * 100) + 1;
    let count = 0;
    let win = false;

    while(count < 10) {

        let guess = Number(prompt("Enter a number between 1 and 100"));

        if(isNaN(guess)) {
            alert("Please enter a valid number");
            continue;
        }

        if(guess < 1 || guess > 100) {
            alert("Number must be between 1 and 100");
            continue;
        }

        count++;

        if(guess > randomNum) {
            alert("Too High!");
        }
        else if(guess < randomNum) {
            alert("Too Low!");
        }
        else {
            alert("Congratulations! You Win!");
            alert("Total Attempts: " + count);
            win = true;
            break;
        }
    }

  
    if(!win) {
        alert("Game Over!");
        alert("The Number was: " + randomNum);
        break;  
    }

    let play = prompt("Play Again? (yes/no)");

    if(play.toLowerCase() !== "yes") {
        alert("Thank You for Playing!");
        break;
    }
}