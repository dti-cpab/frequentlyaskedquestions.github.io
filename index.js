function chevronClick(idName){
    let chevronElem = document.getElementById(idName);
    const parentElem = chevronElem.parentElement;
    const answerElem = parentElem.nextElementSibling;
    if(chevronElem.className === "fa fa-chevron-down") {
        chevronElem.className = "fa fa-chevron-up";
        answerElem.style.maxHeight = answerElem.scrollHeight + "px";
    } else {
        chevronElem.className = "fa fa-chevron-down";
        answerElem.style.maxHeight = 0;
    }
}

function questionClick(idName){
    const quesDoc = document.getElementById(idName);
    const childDoc = quesDoc.firstElementChild;
    const divDoc = quesDoc.nextElementSibling;
    const parentDoc = divDoc.parentElement;
    const grandDoc = parentDoc.parentElement;
    const greatDoc = grandDoc.parentElement;
    if(divDoc.className === "answer-paragraph-hide") {
        divDoc.className = "answer-paragraph-show";
        divDoc.style.maxHeight = divDoc.scrollHeight + "px";
        greatDoc.style.maxHeight = greatDoc.scrollHeight + "px";
        childDoc.textContent = "-";
    } else if (divDoc.className === "answer-paragraph-show") {
        divDoc.className = "answer-paragraph-hide";
        divDoc.style.maxHeight = 0;
        childDoc.textContent = "+";
    }
}