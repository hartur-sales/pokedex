# 🎮 Pokedex

A simple and interactive Pokedex web application that allows users to search and browse through Pokémon using the [PokéAPI](https://pokeapi.co/). Built with vanilla JavaScript, this application provides a nostalgic interface inspired by the classic Pokedex design.

## 📸 Preview

The application features a beautiful Pokedex-styled interface where you can:
- View animated Pokémon sprites
- Search by name or number
- Navigate between Pokémon with previous/next buttons

## ✨ Features

- 🔍 **Search Functionality**: Find Pokémon by name or Pokedex number
- 🎨 **Animated Sprites**: Display Pokémon with their animated sprites from Generation V
- ⬅️➡️ **Navigation**: Browse through Pokémon using Previous and Next buttons
- 📱 **Responsive Design**: Works seamlessly on various screen sizes
- 🎯 **User-Friendly Interface**: Intuitive Pokedex-styled design
- ⚡ **Fast Loading**: Lightweight application with no dependencies

## 🛠️ Technologies

This project is built with:

- **HTML5**: Structure and markup
- **CSS3**: Styling with custom fonts (Oxanium) and gradients
- **Vanilla JavaScript**: Core functionality and API integration
- **PokéAPI**: RESTful API for Pokémon data

## 🚀 Getting Started

### Prerequisites

No installation required! This is a static web application that runs directly in your browser.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/hartur-sales/pokedex.git
   cd pokedex
   ```

2. Open the application:
   - Simply open `index.html` in your web browser, or
   - Use a local server (recommended for best experience):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Or using Python 2
     python -m SimpleHTTPServer 8000
     
     # Or using Node.js (if you have http-server installed)
     npx http-server
     ```

3. Navigate to `http://localhost:8000` in your browser (if using a local server)

## 📖 Usage

1. **Search for a Pokémon**: 
   - Type the Pokémon's name or number in the search field
   - Press Enter or click the search button

2. **Navigate Through Pokémon**:
   - Use the "Prev <" button to view the previous Pokémon
   - Use the "Next >" button to view the next Pokémon

3. **View Details**:
   - The Pokémon's number and name are displayed
   - An animated sprite is shown in the center of the Pokedex

## 📁 Project Structure

```
pokedex/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── script.js      # JavaScript logic
├── img/
│   └── pokedex.png    # Pokedex background image
├── icon/
│   └── pokebola16x16.png  # Favicon
└── README.md          # Project documentation
```

## 🌐 API Reference

This application uses the [PokéAPI](https://pokeapi.co/), a free and open API that provides comprehensive Pokémon data.

- **Endpoint Used**: `https://pokeapi.co/api/v2/pokemon/{id or name}`
- **Data Retrieved**: Pokémon ID, name, and animated sprites

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this Pokedex:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Open a Pull Request

## 📝 License

This project is currently unlicensed. Please contact the author for usage permissions.

## 👤 Author

**Hartur Sales**
- GitHub: [@hartur-sales](https://github.com/hartur-sales)

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- The Pokémon Company for the original Pokémon designs
- Google Fonts for the Oxanium font family

---

⭐ If you found this project helpful, please consider giving it a star!