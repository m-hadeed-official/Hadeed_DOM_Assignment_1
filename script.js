// task 1

let helloWorld = document.getElementById("helloWorld")
// changing text
helloWorld.innerText = "Welcome to JavaScript DOM."

// task 2
let t2Para = document.getElementById("t2Para");
function changeParaText(){
    t2Para.innerText = "Paragraph Text changed"

}

// task 3
function changeBackground(thi){
    thi.style.backgroundColor = "lightBlue";
}

//task 4

function showAlert(){
    alert("DOM is working")
}

//task 5
let updateTextPara = document.getElementById("updateTextPara");
let textInput = document.getElementById("textInput");



function updateParaText(){
    updateTextPara.innerText = textInput.value;
    textInput.value = "";
}