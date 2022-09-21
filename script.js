let click = 0;
function changeColor(){
    if (click % 2 === 0) {
        let el1 = document.getElementById("birth_place");
        el1.style.background = "purple";
        el1.style.color = "white";
        click++;
    } else {
        let el1 = document.getElementById("birth_place");
        el1.style.background = "red";
        el1.style.color = "black";
        click++;
    }
}

let click2 = 0;
function changeColor2(){
    if (click2 % 2 === 0) {
        let el2 = document.querySelector("#education");
        el2.style.background = "blue";
        el2.style.color = "white";
        click2++;
    } else {
        let el2 = document.querySelector("#education");
        el2.style.background = "green";
        el2.style.color = "black";
        click2++;
    }
}

function addImage() {
    let img = document.getElementById("img");
    img.innerHTML += "<img src=\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c0/8c/cb/\n" +
        "caption.jpg?w=1400&h=-1&s=1&cx=1417&cy=1042&chk=v1_ad4fa9803937402ad7bf\" id='image' width='720' height='540' " +
        "alt='Amsterdam2'/>";
}

function deleteImage() {
    let img = document.getElementById("img");
    img.innerHTML = "<p></p>";
}

function biggerImage(){
        let myImg = document.getElementById("image");
        let currWidth = myImg.clientWidth;
        let currHeight = myImg.clientHeight;
        if(currWidth >= 1000){
                alert("You have reached the maximum!");
        } else{
            myImg.style.width = (currWidth + 20) + "px";
            myImg.style.height = (currHeight + 20) + "px";
        }
}

function smallerImage(){
    let myImg2 = document.getElementById("image");
    let currWidth2 = myImg2.clientWidth;
    let currHeight2 = myImg2.clientHeight;
    if(currHeight2 <= 160){
        alert("You have reached the minimum!");
    } else{
        myImg2.style.width = (currWidth2 - 30) + "px";
        myImg2.style.height = (currHeight2 - 30) + "px";
    }
}
