


let input = document.querySelector("input")
let s = document.querySelector("section")


function getData(url) {
    s.innerHTML = ""

    let request = new XMLHttpRequest();
    request.open("GET", url, true)

    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.responseText)
            let x = data.recipes
            x.forEach(element => {
                s.innerHTML += `<div class="card">
<div class="image">
       <img src="${element.image}" class="img"> 
       </div>
       <div>
       <h2>${element.name}</h2>
       <h3>Ingredients: ${element.ingredients}</h3>
<a href="">
   See Recipe >
</a>        
        </div>

        
        </div>`

            });
        }
    }

    request.send();
}
getData("https://dummyjson.com/recipes");


input.addEventListener("input", () => {
    let v = input.value
    let newLink = `https://dummyjson.com/recipes/search?q=${v}`
    getData(newLink);
})


