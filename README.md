# Unit Conversion Calculator

This project is a **Unit Conversion Calculator** built using **HTML, CSS, JavaScript, and Python**. It provides an interactive interface for converting various units related to wastewater operation and design.

## 🌟 Features
- **Unit Conversion**: Convert between various units such as gallons, million gallons, cubic feet, pounds, and flow rates.
- **Lbs/Day Calculation**: Calculate mass loading using the formula:  
  \[ \text{lbs/day} = \text{Concentration (mg/L)} \times \text{Flow (MGD)} \times 8.34 \]
- **Mobile Responsive**: Fully functional on mobile devices.
- **Easy to Use**: Simple dropdown selection for conversions.

## 🔧 Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (if required for additional processing)

## 📌 Conversion Formulas Implemented
| Conversion Type            | Formula |
|----------------------------|------------------------------|
| Gallons ➝ Million Gallons  | `gallons ÷ 1,000,000` |
| Million Gallons ➝ Gallons  | `MG × 1,000,000` |
| Cubic Feet ➝ Gallons       | `cubic feet × 7.48` |
| Gallons ➝ Cubic Feet       | `gallons ÷ 7.48` |
| Gallons ➝ Pounds           | `gallons × 8.34` |
| Pounds ➝ Gallons           | `pounds ÷ 8.34` |
| GPM ➝ MGD                  | `GPM × 0.00144` |
| MGD ➝ GPM                  | `MGD ÷ 0.00144` |
| GPM ➝ GPH                  | `GPM × 60` |
| GPH ➝ GPM                  | `GPH ÷ 60` |
| GPM ➝ GPS                  | `GPM ÷ 60` |
| GPS ➝ GPM                  | `GPS × 60` |
| GPH ➝ GPS                  | `GPH ÷ 3600` |
| GPS ➝ GPH                  | `GPS × 3600` |

## 📜 How to Use
1. **Clone the Repository**
   ```bash
   git clone https://github.com/s-syeda-aiman-fatima/unit-conversion-calculator.git
   cd unit-conversion-calculator
   ```
2. **Open `index.html` in a Browser**
   - You can directly open it in Chrome, Firefox, or any browser.
   
3. **Host on GitHub Pages**
   - Push changes to GitHub and enable GitHub Pages in repository settings.

## 🚀 Live Demo
[Unit Conversion Calculator](https://s-syeda-aiman-fatima.github.io/unit-conversion-calculator/)

## 📜 License
This project is open-source and available under the MIT License.

---
### 💡 Contributions & Issues
Feel free to contribute by submitting issues or pull requests!
