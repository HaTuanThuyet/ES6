const text = document.querySelector(".heading").innerHTML;
const textArray = [...text];

const createSpan = () =>{
    contentHtmlSpan = "";
    for(let letter of textArray) {
        contentHtmlSpan += `<span>${letter}</span>`
    }
//  console.log(contentHtmlSpan);
    document.querySelector(".heading").innerHTML = contentHtmlSpan;
}

createSpan();


