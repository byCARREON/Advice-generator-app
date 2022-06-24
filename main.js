const adviceBtn = document.querySelector(".card__btn");
const adviceQuote = document.querySelector(".card__quote");
const adviceId = document.querySelector(".adviceId");

const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json()
    const {slip} = data
    adviceId.innerHTML = `#${slip.id}`
    adviceQuote.innerHTML = slip.advice
};

fetchData()
adviceBtn.addEventListener("click", fetchData);