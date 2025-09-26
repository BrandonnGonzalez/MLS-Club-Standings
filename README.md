# MLS Community Board 🏆

A modern, responsive web application showcasing all Major League Soccer (MLS) teams with their official logos, locations, and conference standings. Built with React and featuring a sleek card-based design.

![MLS Community Board](https://img.shields.io/badge/MLS-Community%20Board-green?style=for-the-badge&logo=react)

## 🌟 Overview

The MLS Community Board is an interactive web application that displays all 30 MLS teams organized by their respective conferences (Eastern and Western). Each team is presented in a visually appealing card format with official team logos, names, and locations. The application also features curated "Top 5" lists for each conference.

## ✨ Features

- **Complete MLS Team Directory**: All 30 current MLS teams with official branding
- **Conference Organization**: Teams separated into Eastern and Western conferences
- **Official Team Logos**: High-quality team logos sourced from MLS official resources
- **Responsive Grid Layout**: Adaptive design that works on all screen sizes
- **Interactive Cards**: Hover effects and smooth transitions
- **Top 5 Rankings**: Curated lists of top-performing teams by conference
- **External Links**: Direct link to official MLS standings
- **Modern UI**: Clean, professional design with consistent styling

## 🚀 Live Demo

[View Live Application](https://your-deployment-url.com) *(Replace with your actual deployment URL)*

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with CSS Grid and Flexbox
- **Development**: ESLint for code quality
- **Package Manager**: npm

## 📦 Dependencies

### Production Dependencies
- `react`: ^19.1.1
- `react-dom`: ^19.1.1

### Development Dependencies
- `@vitejs/plugin-react`: ^5.0.3
- `vite`: ^7.1.7
- `eslint`: ^9.36.0
- Various ESLint plugins for React development

## 🏗️ Project Structure

```
community-board/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Card.jsx              # Individual team card component
│   │   ├── Card.css              # Card styling
│   │   ├── TopFiveEasternCard.jsx # Eastern conference top 5
│   │   └── TopFiveWesternCard.jsx # Western conference top 5
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Global application styles
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Base styles
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mls-community-board.git
   cd mls-community-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Black (#000000)
- **Text Color**: White (#ffffff)
- **Accent Color**: Dusty Rose (#C19A9B)
- **Border Color**: Light Gray (#ddd)

### Layout
- **Responsive Grid**: Auto-fitting cards with minimum 250px width
- **Card Design**: Rounded corners, subtle shadows, hover effects
- **Typography**: Clean, readable fonts with proper hierarchy

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 5-6 cards per row
- **Tablet**: 3-4 cards per row
- **Mobile**: 1-2 cards per row

## 🏆 MLS Teams Included

### Eastern Conference (15 teams)
- Atlanta United FC, Charlotte FC, Chicago Fire FC, FC Cincinnati, Columbus Crew, D.C. United, Inter Miami CF, CF Montreal, Nashville SC, New England Revolution, New York City FC, New York Red Bulls, Orlando City SC, Philadelphia Union, Toronto FC

### Western Conference (15 teams)
- Austin FC, Colorado Rapids, FC Dallas, Houston Dynamo FC, LAFC, LA Galaxy, Minnesota United FC, Portland Timbers, Real Salt Lake, San Diego FC, San Jose Earthquakes, Seattle Sounders FC, Sporting Kansas City, St. Louis City SC, Vancouver Whitecaps FC

## 🔗 External Resources

- [Official MLS Website](https://www.mlssoccer.com/)
- [MLS Team Standings](https://www.mlssoccer.com/standings/)
- Team logos sourced from official MLS media resources

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow the existing code style
2. Run `npm run lint` before submitting
3. Test your changes on multiple screen sizes
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Major League Soccer** for official team information and branding
- **React Team** for the excellent framework
- **Vite** for the fast build tool
- **CodePath** for project inspiration and guidance

## 📞 Contact

**Developer**: Brandon Gonzalez  
**Project Link**: [https://github.com/yourusername/mls-community-board](https://github.com/yourusername/mls-community-board)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ for MLS fans everywhere*