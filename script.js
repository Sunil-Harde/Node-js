


// let ww = document.getElementById("ww")
// let www = document.querySelector("#ww")

// let btn = document.querySelector("#btn")

// let input = document.querySelector("#input")

// console.log(ww.innerHTML);
// console.log(ww.textContent);


// console.log(document.getElementsByClassName("ww"));
// console.log(document.getElementsByTagName("h1"));





// // ww.remove()


// function inputValue() {

//     console.log(input.value);
//     ww.innerHTML = input.value

// }


// input.addEventListener("click", inputValue)

// function fun() {
//     ww.style.color = "blue"
//     ww.style.background = "red"
//     ww.style.fontSize = "5rem"
//     ww.innerText = "how are you "

// }






// btn.addEventListener("click", inputValue )



fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {


        // for(let i =0; i<data.length; i++){ 
        //     console.log(data[i].title)
        // }

        // for(const value of data){
        //     console.log(value.title)
        // }

        let cards = document.querySelector("#cards")
        data.forEach(element => {

            console.log(element.title)

            cards.innerHTML += `
        <div class="card">

            <img src="${element.image}" alt>

            <p>${element.title}</p>
            <div class="price">
            <h1>${element.price}</h1>
            <h1>${element.rating.rate}</h1>
            </div>
            <h1>${element.description}</h1>

        </div>`


        });

    })





