# Around the World

Around the World is a web application that displays countries' flags and key information such as capital, population, and region. It features a responsive design, dark mode, and various functionalities to enhance user experience.

## Features

- **Responsive Design**: Adapts to different screen sizes for optimal viewing on all devices.
- **Dark Mode**: Toggle between light and dark themes.
- **Search Functionality**: Search for countries by name.
- **Filter by Region**: Filter the list of countries by their region.
- **Local Storage**: Retrieves data from local storage first; if empty, it fetches from an API.
- **Detailed Country Page**: Provides comprehensive information about a selected country, using real data.

## Pages

### Home Page

- Displays a list of countries with their flags and key information.
- Retrieves data from local storage or fetches it from an API if not available locally.
- Handles loading states and 404 errors gracefully.
- Includes search and filter functionalities.

### Country Page

- Shows detailed information about a selected country.
- Uses data from local storage or fetches it from an API if not available locally.

## Technologies Used

- **HTML**
- **Tailwind**
- **React**
- **Vite**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nabdelfattah/around-the-world.git
   ```

Information is taken from https://restcountries.com/ API

[Live Site URL](https://around-the-world-app.vercel.app/)
