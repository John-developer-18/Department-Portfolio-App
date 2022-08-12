//Ajax
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getNewtext() {
    var randomNumber = getRandomInt(0, 2);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `./txt_snippets/file${randomNumber}.txt`);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("text").innerHTML = this.responseText;
            //  We reference the paragraph here, and insert the response of the ajax request into the paragraph
        }
    };
    xhr.send();
}

document.getElementById('something-new').addEventListener('click', getNewtext);

function getComment() {
    var randoNum = getRandomInt(1, 5);
    var send = new XMLHttpRequest();
    send.open('GET', `./comments/comment${randoNum}.txt`);
    send.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("textcoms").innerHTML = this.responseText;
            //  We reference the paragraph here, and insert the response of the ajax request into the paragraph
        }
    };
    send.send();
}
document.getElementById('morebtn').addEventListener('click', getComment);

function getName() {
    var randoNum = getRandomInt(1, 5);
    var send = new XMLHttpRequest();
    send.open('GET', `./comments/name${randoNum}.txt`);
    send.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("textname").innerHTML = this.responseText;
            //  We reference the paragraph here, and insert the response of the ajax request into the paragraph
        }
    };
    send.send();
}
document.getElementById('morebtn').addEventListener('click', getName);




