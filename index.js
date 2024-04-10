const ShortInput = document.getElementById('ShortInput')
const ShortBtn = document.getElementById('ShortBtn')
const CreateLinkSection = document.getElementById('CreateLinkSection')

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
        setTimeout(() => {
            btn.textContent = 'Copied'
            btn.classList.add('linkBtn1')
        }, 100);
       
        setTimeout(() => {
            Element.classList.add('hide')
        
        }, 500);
       

    })

    // const myTimeout = setTimeout(myGreeting, 5000);
}


ShortBtn.addEventListener('click', () => {
    short()

})

// to copy link
btn.addEventListener('click',()=>{
    const btn1 = document.createElement('button')
    btn1.classList.add('linkBtn1')
    btn1.textContent = 'Copy'
    div.appendChild(btn1)
    CreateLinkSection.append(Element)
    // btn.classList.add('linkBtn1')
})

// const copyBtnAll = [...document.querySelectorAll('.linkBtn')]
// copyBtnAll.forEach(ele => {
   
//     ele.addEventListener('click', (e) => {
//         copyBtnAll.forEach(ele => {
//             ele.textContent = 'Copy'
//             ele.style.backgroundColor = 'hsl(180, 66%, 49%)'
//         })
//         copyTextToclipborad(shortLink)
//         e.target.textContent = "Copied!"
//         e.target.style.backgroundColor = 'hsl(257, 27%, 26%)'
//     })

// }) 

