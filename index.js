// Create a Grocery list by dynamically 
// getElememntById(),createElement(), appendChild(), classList.add(), textContent property, setAttribute() 



let divElement = document.createElement("div")
divElement.classList.add("bg-container")
document.body.appendChild(divElement)

let headElement = document.createElement('h1')
headElement.classList.add("heading")
headElement.textContent="Grocery List"
divElement.appendChild(headElement)

let ulElement = document.createElement('ul')
ulElement.classList.add("list-container")
divElement.appendChild(ulElement)

let arr = ["Milk", "Butter","Chocolate","Apple"]
for (let each of arr){
    let liElement = document.createElement("li")
    liElement.textContent=each
    ulElement.appendChild(liElement)
}

let ipElement = document.createElement("input")
ipElement.id="deliveryMode"
ipElement.type="checkbox"
divElement.appendChild(ipElement)

let labelElement = document.createElement('label')
labelElement.textContent="Need Home Delivery"
labelElement.classList.add("delivery-text")
labelElement.setAttribute("for","deliveryMode")
divElement.appendChild(labelElement)

let breakElement = document.createElement("br")
divElement.appendChild(breakElement)
let btnElement = document.createElement("button")
divElement.appendChild(btnElement)
btnElement.classList.add("btn","btn-primary")
btnElement.textContent="Proceed to Pay"
console.log(divElement)