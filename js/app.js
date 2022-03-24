
//  #6 Example of addElement() 

function addDiv(){
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(`This is a new Div`)
    newDiv.appendChild(newContent);
    let currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

// #1 Example of querySelector()

let firstTitle = document.querySelector(`h1`);
firstTitle.innerText = "Welcome to Eric's Homework!";

// #2 Example of querySelectorAll()

let allP = document.querySelectorAll('p')
for(let i=0; i<allP.length; i++){
    allP[i].innerText = "Example of querySelectorAll()";
}


// #3 Example of getElementById()

let firstDiv = document.getElementById(`practiceDiv`);
firstDiv.style.backgroundColor="lightblue"; 

// #4 Example of getElementByClass()

let pClass = document.getElementsByClassName("pStyling");
for(let i=0; i< pClass.length; i++){
    pClass[i].style.backgroundColor="limegreen";
}



//  #5 Example of getElementByTag()

function styleSection() {
    let firstSection = document.getElementsByTagName(`section`);
    for(let i=0; i< firstSection.length; i++){
        firstSection[i].style.backgroundColor="maroon";
    }
    
}









// function addElement() {
//     let newH3 = document.createElement(`h3`);
//     let h3Content = document.querySelector(`h3`);
//     h3Content.innerText = "This is my new message";
//     newH3.appendChild(h3Content);
//     let currentH3 = document.getElementsByTagName(`body`);
//     document.body.insertAdjacentElement(h2, currentH3)
    
// }