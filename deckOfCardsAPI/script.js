let url = "https://deckofcardsapi.com/api/deck"

//Get value and suit of a card from a shuffled deck
$.getJSON(`${url}/new/draw/`).then(data => {
    let value = data.cards[0].value
    let suit = data.cards[0].suit
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
})

async function getValueAndSuit() {
    let data = await $.getJSON(`${url}/new/draw/`)
    let value = data.cards[0].value
    let suit = data.cards[0].suit
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
}

// Grabs the first card and then a second card based on the data from the first card
let firstCard = null
$.getJSON(`${url}/new/draw/`).then(data => {
    firstCard = data.cards[0]
    let deckId = data.deck_id
    return $.getJSON(`${url}/${deckId}/draw/`)
}).then(data => {
    let secondCard = data.cards[0];
    [firstCard, secondCard].forEach(card => {
        console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
    }) 
})

async function getTwoCards() {
    let firsCard = await $.getJSON(`${url}/new/draw/`)
    let deckId = firsCard.deck_id
    let secondCard = await $.getJSON(`${url}/${deckId}/draw/`)
    [firstCard, secondCard].forEach(card => {
        console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
    })
}


// Gives a random card until no more cards are left
let $btn = $("button")
let $card = $("#card")
let deckId = null

$.getJSON(`${url}/new/shuffle/`).then(data => {
    deckId = data.deck_id
})

$btn.on("click", () => {
    $.getJSON(`${url}/${deckId}/draw/`).then(data => {
        let cardImg = data.cards[0].image;
        $card.append($('<img>', {src: cardImg}))
        if (data.remaining === 0) $btn.remove()
    })
})

async function giveRandomCard() {
    let deckData = await $.getJSON(`${url}/new/shuffle/`)
    $btn.on("click", async function () {
        let cardData = await $.getJSON(`${url}/${deckData.deck_id}/draw/`)
        let cardImg = cardData.cards[0].image;
        $card.append($('<img>', {src: cardImg}))
        if (data.remaining === 0) $btn.remove()
    })
}
giveRandomCard()