// Update the API endpoint to your Node.js server
const serverUrl = 'http://localhost:3000';

document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('exampleFormControlTextarea1').value;
  
    try {
        const response = await fetch(`${serverUrl}/search?query=${query}`);
        const data = await response.json();
        
        // Handle and display the data in your extension
        console.log('Received data from the server:', data);
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
});