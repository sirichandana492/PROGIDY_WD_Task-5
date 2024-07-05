// Replace with your API key and desired location
const apiKey = 'YOUR_API_KEY';
const location = 'New York'; // Example location

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = data.main.temp;
        // Add more data (e.g., description, humidity, etc.) as needed
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeather();
