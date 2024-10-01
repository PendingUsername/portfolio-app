# My Portfolio Website

Welcome to my personal portfolio website! This is a Node.js-based web application with Nginx, showcasing my projects, skills, and contact information. It includes features such as a toggle between **dark mode** and **light mode**, a view counter, and a responsive layout. 

## Features

- **Responsive Design**: Mobile-first approach with a modern and clean design.
- **Dark Mode / Light Mode Toggle**: Allows users to switch between dark and light themes.
- **Projects Section**: Displays some of my key projects, with links to their respective GitHub repositories.
- **Skills Dock**: Highlights various technologies with hover effects and links to the official websites of each technology.
- **Contact Form**: Enables visitors to send me messages via a form.
- **View Counter**: Displays how many times the page has been viewed.
- **Hosted Using Nginx**: The app is deployed behind Nginx for better performance.

---

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd portfolio-app
   ```

3. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

4. **Serve Static Assets**:
   Ensure the images are placed correctly in the `/public/images` folder for profile picture, project images, and skill icons.

---

## Running the Application

Once everything is set up, you can start the server locally by running:

```bash
npm start
```

By default, the app will run on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to view the portfolio.

You can change the default port by modifying the following line in **`app.js`**:
```javascript
const PORT = process.env.PORT || 3000;
```

---

## Project Structure

Here's an overview of the key files and directories in this project:

```
portfolio-app/
│
├── public/                # Static assets (CSS, Images)
│   ├── css/
│   │   └── styles.css      # Main CSS file for the web app
│   └── images/             # Profile picture, project images, skill icons
│
├── views/
│   └── index.ejs           # Main HTML template using EJS
│
├── app.js                  # Main application server
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Auto-generated package lock file
├── README.md               # Documentation
└── routes/
    └── index.js            # Routes for the application
```

---

## Screenshots

### Dark Mode
![Dark Mode Screenshot](path_to_your_screenshot)

### Light Mode
![Light Mode Screenshot](path_to_your_screenshot)

---

## Technologies Used

The following technologies are used in this project:

- **Node.js**: Backend runtime for serving the app.
- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for rendering HTML.
- **CSS Flexbox & Grid**: For responsive design and layout.
- **Nginx**: Reverse proxy and load balancer.
- **Formspree**: Handles the contact form submissions.
- **LocalStorage**: Used for dark/light mode persistence.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
