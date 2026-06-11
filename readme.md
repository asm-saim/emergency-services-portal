<img src="./assets/logo.png" width="100" style="background:white;padding:10px;border-radius:8px;"/>

# Emergency Service Directory

A responsive web application providing instant access to emergency hotline numbers, with one-click copy, mock call functionality, and live call history tracking.

## Overview

**Emergency Service Directory** is a frontend web application designed to give users quick and reliable access to important emergency contact numbers — including national emergency services, police, fire service, ambulance, and more.

The interface allows users to:

- Copy hotline numbers directly to their clipboard
- Simulate placing a call, with a coin-based usage system
- Track every call made in a dynamic call history log
- Mark services as favourites using a like counter

The project was built with a strong focus on **clean UI design**, **interactive functionality**, and **full responsiveness** across mobile, tablet, and desktop devices.

---

## Live Demo

> Add your deployed link here, for example:
> [https://emergency-service-directory.netlify.app](https://emergency-service-directory.netlify.app)

---

## Tech Stack

| Layer       | Technology                  |
|-------------|------------------------------|
| Markup      | HTML5                        |
| Styling     | CSS3, Tailwind CSS            |
| Logic       | Vanilla JavaScript (ES6+)      |
| Icons       | Font Awesome                  |

---

## Features

### Navbar
- Website logo and name on the left
- Like (heart) counter, coin balance, and copy counter on the right
- Fully responsive — stacks and resizes on smaller screens

### Hero Section
- Full-width gradient background
- Centered logo, title, and slogan

### Hotline Cards
- Minimum of six emergency service cards
- Each card includes:
  - Service icon/image
  - Service name (in two languages)
  - Hotline number
  - Category badge
  - Like (heart) icon
  - Copy and Call action buttons

### Copy to Clipboard
- Copies the hotline number using the Clipboard API
- Displays a confirmation alert
- Increases the copy counter in the navbar

### Call Simulation
- Displays an alert with the service name and number
- Deducts 20 coins per call
- Blocks the action with a warning if the coin balance is insufficient
- Logs the call in the History section with the exact time

### Call History
- Initially empty, fills dynamically as calls are made
- Displays service name, number, and call time
- Clear History button removes all entries instantly

### Responsive Design
- Single-column layout on mobile
- Two-column layout on tablets
- Four-column layout on desktop

---

## Key Highlights

- Implemented a **dynamic card-to-history workflow** in Vanilla JS, where user actions update the navbar counters and history log in real time
- Built a **coin-based transaction system** with balance validation before each call
- Used the **Clipboard API** for seamless one-click number copying
- Achieved a **fully responsive layout** using Tailwind CSS grid and flex utilities
- Delivered a polished, self-contained UI with consistent interaction patterns across all components

---

## UI Screenshots

<table>
  <tr>
    <td align="center"><b>Home Page</b></td>
    <td align="center"><b>Hotline Cards Section</b></td>
  </tr>
  <tr>
    <td><img src="./projects_snip/homepage.png" alt="Home Page"></td>
    <td><img src="./projects_snip/cards-section.png" alt="Hotline Cards Section"></td>
  </tr>
  <tr>
    <td align="center"><b>Call History Section</b></td>
    <td align="center"><b>Mobile Responsive View</b></td>
  </tr>
  <tr>
    <td><img src="./projects_snip/call-history.png" alt="Call History Section"></td>
    <td><img src="./projects_snip/mobile-view.png" alt="Mobile Responsive View"></td>
  </tr>
</table>

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, or Safari)
- No additional software or dependencies required

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/emergency-service-directory.git
   ```
2. Navigate into the project folder
   ```bash
   cd emergency-service-directory
   ```
3. Open `index.html` in your browser
   ```bash
   start index.html   # Windows
   open index.html    # macOS
   ```

> Note: The Clipboard API requires the page to be served over HTTPS or accessed via `localhost`. For full functionality, it is recommended to run the project using a local development server (e.g. the Live Server extension in VS Code).

---

## Usage Guide

| Action | Result |
|---|---|
| Click the heart icon on a card | Increases the like counter in the navbar |
| Click the Copy button | Copies the hotline number to clipboard and increases the copy counter |
| Click the Call button | Shows an alert, deducts 20 coins, and adds the call to the history |
| Click Clear in the History section | Removes all entries from the call history |

---

## Browser Support

| Browser | Supported |
|---|---|
| Chrome | Yes |
| Firefox | Yes |
| Edge | Yes |
| Safari | Yes |

---

## Future Improvements

- Persist coin balance, like count, and call history using local storage
- Add a search/filter feature for hotline cards by category
- Add dark mode support
- Add user authentication for personalized history tracking

---

## Author

**Your Name**
- GitHub: [@your-asm-saim](https://github.com/your-username)
- LinkedIn: [A SM Saim](https://linkedin.com/in/your-profile)

---

## License

This project is licensed under the [MIT License](LICENSE).