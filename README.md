# ⚽ FC OVR Calculator

A modern React web app for calculating team overall (OVR) rating in football/soccer games. Perfect for EA Sports FC Mobile players using a 4-3-3 formation.

## 🎮 Features

- **11 Player Positions** - ST, LW, RW, 3x CM/CDM, LB, CB, RB, GK
- **4-3-3 Formation** - Optimized for standard football formation
- **Real-time Calculation** - Instantly calculate team OVR
- **Color-coded Players** - Visual distinction between attackers, midfielders, defenders, and goalkeeper
- **Responsive Design** - Works seamlessly on mobile and desktop
- **Reset Functionality** - Quick clear to start fresh calculations
- **Beautiful UI** - Modern dark theme with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pranith2012/FC-mobile-helper.git
cd FC-mobile-helper
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📁 Project Structure

```
fc-mobile-helper/
├── src/
│   ├── components/
│   │   ├── PlayerCard.jsx       # Individual player input component
│   │   ├── PlayerCard.css
│   │   ├── ResultDisplay.jsx    # Result display component
│   │   └── ResultDisplay.css
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styling
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── public/
│   └── index.html               # HTML template
├── package.json
├── vite.config.js              # Vite configuration
└── README.md
```

## 🎯 How to Use

1. **Enter OVR Values** - Input the overall rating for each player
2. **Click Calculate** - Press the "Calculate OVR" button
3. **View Result** - See your team's calculated OVR
4. **Reset** - Use the "Reset" button to clear all values

## 🛠 Technologies Used

- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Modern JavaScript

## 📝 Formula

Team OVR = Round(Average of all player OVRs + 0.6)

## 🎨 Customization

You can customize the app by modifying:

- **Colors** - Edit CSS files in `src/`
- **Positions** - Modify the `players` array in `App.jsx`
- **Calculation Formula** - Update the `calculateOVR()` function in `App.jsx`

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

Made with ⚽ for FC Mobile enthusiasts
