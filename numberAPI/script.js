let url = "http://numbersapi.com/"

// Get a fact about a number
$.getJSON(`${url}3?json`).then(data => {
    console.log(data)
})

async function getFact() {
    let data = await $.getJSON(`${url}3?json`)
    console.log(data)
}


// Get a fact multiple numbers
let numbers = [1, 2, 5, 7]
$.getJSON(`${url}${numbers}?json`).then(data => {
    console.log(data)
})

async function multipleNumbers() {
    let data = await $.getJSON(`${url}${numbers}?json`)
    console.log(data)
}

// Get 4 facts for a number
Promise.all(Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}3?json`)
})).then(res => {
    res.forEach(data => $("body").append(`<p>${data.text}</p>`))
})

async function getMultipleFacts() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${url}3?json`))
    )
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`))
}