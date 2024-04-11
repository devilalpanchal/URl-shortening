const ShortInput = document.getElementById('ShortInput')
const ShortBtn = document.getElementById('ShortBtn')
const CreateLinkSection = document.getElementById('CreateLinkSection')
const thirdMain = document.getElementById('thirdMain')
async function short() {

    let value = ShortInput.value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${value}`);
    let data = await response.text(); //.json() is not working
    console.log(data);
    const Element = document.createElement('section')
    Element.classList.add('linkSection')

    const div = document.createElement('div')
    div.classList.add('linkMain')
    Element.append(div)

    const div1 = document.createElement('div')
    div1.classList.add('linkShare')
    div.appendChild(div1)

    const span = document.createElement('span')
    span.classList.add('linkInput')
    div1.appendChild(span)
    span.textContent = ShortInput.value;

    const span1 = document.createElement('span')
    const ahref = document.createElement('a')
    ahref.classList.add('linkColor')
    ahref.href =  data;
    ahref.textContent =  data;
    span1.appendChild(ahref)
    div1.appendChild(span1)

    const btn = document.createElement('button')
    btn.classList.add('linkBtn')
    btn.textContent = 'Copy'
    div.appendChild(btn)
    CreateLinkSection.append(Element)

    console.log(Element);
    
    btn.addEventListener('click',()=>{
// to copy text
        function copyShortLinkText() {
            let textArea = document.createElement('textarea');
            textArea.value = ahref.innerText;
            document.body.appendChild(textArea);
            textArea.select()
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
        }
        copyShortLinkText()

            btn.textContent = 'Copied'
            btn.classList.add('linkBtn1')
            ahref.style.color = 'red'
            
            setTimeout(() => {
                btn.classList.remove('linkBtn1')
                btn.textContent = 'Copy'
                ahref.style.color = '#2bd1d1'

        }, 500);
            setTimeout(() => {
                Element.classList.add('hide')
// document.location.reload()
        }, 1000);
       

    })

}



// ShortBtn.addEventListener('click', () => {

//     if (!ShortInput.value == [] ) {
//         short()

        
//     } 
//     else {
//     ShortInput.style.border ="2px solid red"
//     let span2 = document.createElement('span')
//     span2.style.color = 'red'
//     span2.textContent = 'Please add a link'
//     thirdMain.appendChild(span2)
// setTimeout(() => {
//     thirdMain.removeChild(span2)
//     ShortInput.style.border ="2px solid black"

// }, 1000);
  
        
//     }

// })
ShortBtn.addEventListener('click', () => {
    if (ShortInput.value.trim() !== "") {
        short();
    } 
    else {
        if (!document.querySelector('.error-message')) {
            ShortInput.style.border = "2px solid red";
            ShortInput.style.Color = "blue";
            let span2 = document.createElement('span');
            span2.className = 'error-message'; 
            console.log(span2);
            span2.style.color = 'red';
            span2.textContent = 'Please add a link';
            thirdMain.appendChild(span2);
            setTimeout(() => {
                thirdMain.removeChild(span2);
                ShortInput.style.border = "2px solid black";
            }, 1000);
        }
    }
});

// to media querry menu
let menuHide = document.querySelector('.mainmediaQuery')
let ImageMain = document.getElementById('ImageMain')
document.querySelector('.logomenu').addEventListener('click',()=>{
menuHide.classList.toggle('hide')
ImageMain.classList.toggle('hide')
console.log('hey');
})





