function getValue() {
    let v = document.querySelector("input").value;
    /*changeColor(parseInt(v));*/
    bgC(v);
}

function changeColor(val){
    if(val === 1){
        document.querySelector("h1").style.color = "red";
    }
    else{
        document.querySelector("h1").style.color = "blue";
    }
}

function bgC(val) {
    if(val){
        document.body.style.backgroundColor = "#ffcccc";
    }
    else{
        document.body.style.backgroundColor = "white";
    }
}

function paragraphStyle(){
    let paragraphs = document.querySelectorAll("p, h1");
  
    for(paragraph of paragraphs){
        
        /*console.log(paragraph.innerText.slice(-1));*/
        if(paragraph.innerText.slice(-1) == 1){
            paragraph.style.color = "red";
        }
        else if(paragraph.innerText.slice(-1) == 2){
            paragraph.style.color = "blue";
        }
        else if(paragraph.innerText.slice(-1) == 3){
            paragraph.style.color = "orange";
        }
        else{
            paragraph.style.color = "green";
        }
        
    }
    /*console.log(paragraphs);*/
}

document.querySelector("button").addEventListener("click", getValue);
/*document.addEventListener("DOMContentLoaded", bgC);*/
document.addEventListener("DOMContentLoaded", paragraphStyle);
