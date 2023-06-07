// querySelector
//
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document

//document.querySelector(selector)
let elementDiv = document.querySelector('div');
console.log(elementDiv.innerText);

let elementH1 = document.querySelector('#header1');
console.log(elementH1.innerHTML);

let elementP = document.querySelector('.paragraph');
console.log(elementP.innerText);

// querySelectorAll
//
// The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

// document.querySelectorAll(selector);

let elementDivs = document.querySelectorAll('div');
console.log(elementDiv);
Array.from(elementDivs).forEach(function(item){
    item.style.color = 'blue';
});