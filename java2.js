
let form = document.querySelector("form")
let input2 = document.querySelector("#f")
let input3 = document.querySelector("#s")
let input4 = document.querySelector("#p")

let input6 = document.querySelector("#e")
let input7 = document.querySelector("#ps")
let input8 = document.querySelector("#cp")


let input12 = document.querySelector(".a")
let input13 = document.querySelector(".b")
let input14 = document.querySelector(".c")
let input15 = document.querySelector(".d")
let input16 = document.querySelector(".e")
let input17 = document.querySelector(".f")
let input18 = document.querySelector(".g")


input2.addEventListener("input", () => {
    let v = input2.value
    let regxname = /^[A-Z][a-z]{2,}$/
    let resu = regxname.test(v)
    if (resu) {
        input12.innerHTML = `<div> <i style="color:green;" class="fa-regular fa-square-check"></i><span style="color:green;"> valid</span> </div>`
    }
    else {
        input12.innerHTML = `
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">only character</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">more than 2 characters</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">start with capital letter</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">have no space</span>
    </div>
    `;
    }

})
input3.addEventListener("input", () => {
    let v = input3.value
    let regxname = /^[A-Z][a-z]{2,}$/
    let resu = regxname.test(v)
    if (resu) {
        input13.innerHTML = `<div> <i style="color:green;" class="fa-regular fa-square-check"></i><span style="color:green;"> valid</span></div>`
    }
    else {
        input13.innerHTML = `
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">only character</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">more than 2 characters</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">start with capital letter</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">have no space</span>
    </div>
    `;
    }

})
input4.addEventListener("input", () => {
    let v = input4.value
    let regxname = /^(01)[0125][0-9]{8}$/
    let resu = regxname.test(v)
    if (resu) {
        input14.innerHTML = `<div> <i style="color:green;" class="fa-regular fa-square-check"></i><span style="color:green;"> valid</span> </div>`
    }
    else {
        input14.innerHTML = `
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">must start with 011 or012 or 010 or 015</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">only 11 digits</span>
    </div>
    
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">have no space</span>
    </div>
    `;
    }

})


input6.addEventListener("input", () => {
    let v = input6.value;
    let regexname = /^[a-z0-9]{2,}(@gmail.com)$/
    let resu = regexname.test(v)
    if (resu) {
        input16.innerHTML = `<div> <i style="color:green;" class="fa-regular fa-square-check"></i><span style="color:green;"> valid</span> </div>`
    }
    else {
        input16.innerHTML = `
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">must start with small Characters</span>
    </div>
    
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">end with @gmail.com</span>
    </div>
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">have no space</span>
    </div>
    `;
    }

})
input7.addEventListener("input", () => {
    let v = input7.value;
    let regexname = /^[A-Za-z0-9]{7,}$/
    let resu = regexname.test(v)
    if (resu) {
        input17.innerHTML = `<div> <i style="color:green;" class="fa-regular fa-square-check"></i><span style="color:green;"> valid</span> </div>`
    }
    else {
        input17.innerHTML = `
    <div class="msg-item">
        <i class="fa-regular text-danger fa-circle-xmark"></i>
        <span class="text-danger">must more than 6</span>
    </div>
    
    `
    }

    cp(v);


})


function cp(out) {
    input8.addEventListener("input", () => {
        let v = input8.value;
        if (v == out) {
            input18.innerHTML = `<div> <i style="color:green;" class="fa-regular fa-square-check"></i><span style="color:green;"> password confirmid</span> </div>`
        }
        else {
            input18.innerHTML = `<div> <i class="fa-regular text-danger fa-circle-xmark"></i><span style="color:red;"> password not confirmid</span> </div>`

        }



    })


}


function fun(){
form.addEventListener("submit",(e)=>{
    e.preventDefault()
     if (true) {
        window.location.href = "index.html"; 
    } else {
        alert("Please fix errors before submitting!");
    }


})







}


