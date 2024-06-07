let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


//Function to get a new quote from the API
async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quote.innerText = `"${data.content}"`;
        person.innerText = `-${data.author}`;

    } catch (error) {
        console.log("Error fetching the quote",error);
        quote.innerText = "Oops! Something went wrong!";
        person.innerText = "";
    }
}

//Event listener to get a new quote when the button is clicked
btn.addEventListener('click', getQuote);

//Initial call to get a quote when the page loads
getQuote();