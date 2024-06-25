import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="about-container">
    <h1>About Our Weather App</h1>
    <p>
      Welcome to our Weather App! Our app provides up-to-date weather information for cities around the world. Using the OpenWeatherMap API, we fetch the latest weather data and present it to you in a user-friendly format.
    </p>
    <h2>Features</h2>
    <ul>
      <li>Current weather information including temperature, humidity, and wind speed</li>
      <li>Search functionality to find weather information for any city</li>
      <li>Responsive design for seamless experience on both desktop and mobile devices</li>
    </ul>
    <h2>How It Works</h2>
    <p>
      Our app uses the OpenWeatherMap API to fetch weather data. When you search for a city, we send a request to the API with the city's name and receive the latest weather data in response. This data is then displayed on the screen in a clean and easy-to-understand format.
    </p>
    <h2>About OpenWeatherMap</h2>
    <p>
      OpenWeatherMap is a leading provider of weather data, offering current weather information, forecasts, and historical data to developers and businesses around the world. By using OpenWeatherMap, we ensure that our users get accurate and reliable weather information.
    </p>
    <h2>Contact Us</h2>
    <p>
      If you have any questions or feedback, please feel free to contact us at <a href="mailto:support@weatherapp.com">support@weatherapp.com</a>. We would love to hear from you!
    </p>
  </div>
  )
}

export default About