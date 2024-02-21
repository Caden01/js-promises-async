let url = "http://numbersapi.com/"

// Get a fact about a number
$.getJSON(`${url}3?json`).then(data => {
    console.log(data)
})


// Get a fact multiple numbers
let numbers = [1, 2, 5, 7]
$.getJSON(`${url}${numbers}?json`).then(data => {
    console.log(data)
})

// Get 4 facts for a number
Promise.all(Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}3?json`)
})).then(res => {
    res.forEach(data => $("body").append(`<p>${data.text}</p>`))
})