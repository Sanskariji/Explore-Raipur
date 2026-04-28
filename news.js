document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");
    const apiKey = '9873a430613448649c46bb00c83366d8';
    const cityName = 'raipur'; // Replace 'your_city_name' with the desired city name

    const apiUrl = `https://newsapi.org/v2/everything?q=${cityName}&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news:', error));

    function displayNews(articles) {
        newsContainer.innerHTML = articles.map(article => createArticleCard(article)).join('');
    }

    function createArticleCard(article) {
        return `
            <div class="article-card">
                <img src="${article.urlToImage || 'placeholder.jpg'}" alt="News Image">
                <h2>${article.title}</h2>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            </div>
        `;
    }
});
