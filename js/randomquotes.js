/* Quotes
–––––––––––––––––––––––––––––––––––––––––––––––––– */

var quotes = [{
    quote: 'YOU\'RE TEARING ME APART, LISA!',
    character: '- Johnny',
    bodyColor: '#dcb361',
    image: './images/tommy_tearing.png'
}, {
    quote: 'I DID NOT HIT HER. I DID NOT! Oh hi, Mark.',
    character: '- Johnny',
    bodyColor: '#ddb187',
    image: './images/tommy_oh_hi.png'
}, {
    quote: 'Hi, doggy.',
    character: '- Johnny',
    bodyColor: '#2f604a',
    image: './images/tommy_doggy.png'
}, {
    quote: 'You\'re not my ******* mother!',
    character: '- Denny',
    bodyColor: '#5d5d7d',
    image: './images/denny_mother.png'
}, {
    quote: 'Leave your stupid comments in your pocket.',
    character: '- Mark',
    bodyColor: '#e57722',
    image: './images/mark_comments.png'
}, {
    quote: 'I got the results of the test back. I definitely have breast cancer.',
    character: '- Claudette',
    bodyColor: '#82aca2',
    image: './images/claudette_cancer.png'
}, {
    quote: 'You betrayed me! You\'re not good. You, you\'re just a chicken. Chip-chip-chip-chip-cheep-cheep.',
    character: '- Johnny',
    bodyColor: '#c86058',
    image: './images/johnny_cheep.png'
}, {
    quote: 'She pulls it out, and she\'s showing everybody... me underwears.',
    character: '- Mike',
    bodyColor: '#faab5c',
    image: './images/mike_underwears.png'
}, {
    quote: 'WHERE\'S MY ******* MONEY, DENNY?',
    character: '- Chris-R',
    bodyColor: '#d45f4a',
    image: './images/chris_r.png'
}, {
    quote: 'Can I kiss you?',
    character: '- Denny',
    bodyColor: '#B6D6AB',
    image: './images/denny_kiss.png'
}];

/* Variables
–––––––––––––––––––––––––––––––––––––––––––––––––– */

var quote = document.getElementById('quote'),
    character = document.getElementById('character'),
    bodyColor = document.getElementById('body'),
    image = document.getElementById('image'),
    next = document.getElementById('next-button'),
    quoteContainer = document.getElementById('quote-container'),
    currentQuote = 0;


/* Get Quote
–––––––––––––––––––––––––––––––––––––––––––––––––– */

function getQuote() {
    var random = Math.floor(Math.random() * quotes.length),
        quoteResult = quotes[random].quote,
        characterResult = quotes[random].character,
        colorResult = quotes[random].bodyColor,
        imageResult = quotes[random].image

    document.getElementById('quote').innerHTML = quoteResult;
    document.getElementById('character').innerHTML = characterResult;
    document.getElementById('body').style.background = colorResult;
    document.getElementById('image').src = imageResult;

    // Background Color
    document.getElementById('body').style.background = quotes[currentQuote].bodyColor;

}

if (currentQuote === 0) {
    getQuote();
}

/* Next Button
–––––––––––––––––––––––––––––––––––––––––––––––––– */

next.addEventListener('click', function() {
    getQuote();
    currentQuote++;

});
