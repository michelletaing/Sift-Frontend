// Update the API endpoint to your Node.js server
const serverUrl = 'http://localhost:3000';

document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('exampleFormControlTextarea1').value;
  
    try {
        const response = await fetch(`${serverUrl}/search?query=${query}`);
        const data = await response.json();
        
        // Handle and display the data in your extension
        console.log('Received data from the server:', data);

        // Display the response in the "searchResults" div
        const searchResultsDiv = document.getElementById('searchResults');
        searchResultsDiv.innerHTML = ''; // Clear any previous content

        // Create and append elements for each result
        data.results.forEach(result => {
            // Create an HTML string representing the Bootstrap card
            const cardHtml = `
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title">${result.title}</h5>
                        </div>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${result.author}</h6>
                        <p class="card-text">${'This is an example of a summary of a webpage.'}</p>
                        <a href="${result.url}" class="card-link" target="_blank">Read more</a>
                    </div>
                </div>
            `;

            // Append the card HTML to the "searchResults" div
            searchResultsDiv.innerHTML += cardHtml;
        });
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
});