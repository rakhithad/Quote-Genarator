let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '“Sometimes the road less traveled is less traveled for a reason.”',
    person: '-Jerry Seinfeld'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: '“Never go to bed mad. Stay up and fight.”',
    person: '-Phyllis Diller'
},{
    quote: '“If you can’t be kind, at least be vague.”',
    person: '-Judith Martin'
},{
    quote: '“Misers are no fun to live with, but they make great ancestors.”',
    person: '-Tom Snyder'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
},{
    quote: 'Always forgive your enemies. nothing annoys them so much',
    person: '-Oscar Wilde'
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

