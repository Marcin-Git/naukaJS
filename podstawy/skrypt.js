let number = Math.floor(Math.random() * 11);
console.log(number)


function play() {
    let userNumber = document.getElementById("userNumber").value;
    let message;

    if (userNumber > number) {
        message = "Twoj numer jest za duży";
    } else if (userNumber < number) {
        message = "Twoj numer jest za mały";
    } else {
        message = "BRAWO, ZGADŁEŚ";
    }
    document.getElementById("message").innerHTML = message;
}