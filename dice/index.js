for (let i = 0; i < 2; i++) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var random_img = "./images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[i].setAttribute("src", random_img)
}

console.log(document.querySelectorAll("img")[0].getAttribute("src")[13]);

if (document.querySelectorAll("img")[0].getAttribute("src")[13] > document.querySelectorAll("img")[1].getAttribute("src")[13]) {
    document.querySelector("h1").innerHTML = "&#128170 Player 1 Wins!";
} else if (document.querySelectorAll("img")[0].getAttribute("src")[13] === document.querySelectorAll("img")[1].getAttribute("src")[13]) {
    document.querySelector("h1").innerText = "Draw";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128170";
}