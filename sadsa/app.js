let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let box = document.querySelector("#box");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");

let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");
let h4 = document.querySelector("#h4");
let h5 = document.querySelector("#h5");
let btn = document.querySelector("button");


let input3 = document.querySelector("#input3");
let rasm1 = document.querySelector("#rasm1");
let allImages = [];

let inputV1 = input1.value
let inputV2 = input2.value
let inputV3 = input3.value
let inputV4 = input4.value
let inputV5 = input5.value

btn.addEventListener("click", () => {

    let inputV1 = input1.value
    let inputV2 = input2.value
    let inputV4 = input4.value
    let inputV5 = input5.value

    let text1 = document.createTextNode(" Taom nomi: " + inputV1);
    let text2 = document.createTextNode(" Taom narxi: " + inputV2);
    let text4 = document.createTextNode(" Taom oshpazi: " + inputV4);
    let text5 = document.createTextNode(" Taom tayorlangan restaran: " + inputV5);

    h1.appendChild(text1);
    h2.appendChild(text2);
    h4.appendChild(text4);
    h5.appendChild(text5);

    let text111 = document.querySelector("h1");
    text111.appendChild(h1);
})

btn.addEventListener("click", () => {
    box.classList.add("box")
    box1.classList.add("rasm")
    box2.classList.add("text1")
})

btn.addEventListener("click", () => {

    allImages.push(input3.value);
    rasm1.innerHTML = '';
    allImages.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        rasm1.appendChild(img)
        img.style.width = "100%"
        img.style.height = "190px"
        img.style.borderRadius = "20px"
    });
})