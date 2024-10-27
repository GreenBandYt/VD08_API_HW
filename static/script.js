document.getElementById("new-quote-button").addEventListener("click", fetchQuote);

async function fetchQuote() {
    try {
        const response = await fetch("/quote");
        const data = await response.json();

        console.log("Полученные данные:", data);

        document.getElementById("quote-content").textContent = data.content;
        document.getElementById("quote-author").textContent = `- ${data.author}`;
    } catch (error) {
        document.getElementById("quote-content").textContent = "Ошибка загрузки цитаты!";
        console.error("Ошибка при загрузке цитаты:", error);
    }
}

fetchQuote();
