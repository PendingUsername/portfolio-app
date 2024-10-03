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

## Technologies Used

The following technologies are used in this project:

- **Node.js**: Backend runtime for serving the app.
- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for rendering HTML.
- **CSS Flexbox & Grid**: For responsive design and layout.
- **Nginx**: Reverse proxy and load balancer.
- **Formspree**: Handles the contact form submissions.
- **LocalStorage**: Used for dark/light mode persistence.
- **AWS Elastic Beanstalk**: Handles deployment of the Node.js app.
- **GitHub Actions**: CI/CD pipeline for automated deployment to AWS Elastic Beanstalk.

## CI/CD with GitHub Actions

The project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to AWS Elastic Beanstalk. Each time a change is pushed to the main branch, the workflow is triggered to automatically deploy the updated code to AWS.

You’ll need to add the following secrets in your GitHub repository under Settings > Secrets and Variables > Actions:

    AWS_ACCESS_KEY_ID: Your AWS access key.
    AWS_SECRET_ACCESS_KEY: Your AWS secret access key.

These secrets are used in the CI/CD pipeline to authenticate with AWS and deploy the application.

## GPT

Here's the updated README.md with the AWS Elastic Beanstalk and CI/CD process using GitHub Actions added, along with detailed steps for setting up deployment:

markdown

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
- **CI/CD Pipeline with GitHub Actions**: Automated deployment to AWS Elastic Beanstalk.

---

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Elastic Beanstalk Deployment](#elastic-beanstalk-deployment)
- [License](#license)

---

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git

    Navigate to the Project Directory:

    bash

cd portfolio-app

Install Dependencies: Make sure you have Node.js installed, then run:

bash

    npm install

    Serve Static Assets: Ensure the images are placed correctly in the /public/images folder for the profile picture, project images, and skill icons.

Running the Application

Once everything is set up, you can start the server locally by running:

bash

npm start

By default, the app will run on http://localhost:3000. Open this URL in your browser to view the portfolio.

You can change the default port by modifying the following line in app.js:

javascript

const PORT = process.env.PORT || 3000;

Project Structure

Here's an overview of the key files and directories in this project:

graphql

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

Technologies Used

The following technologies are used in this project:

    Node.js: Backend runtime for serving the app.
    Express.js: Web framework for Node.js.
    EJS: Templating engine for rendering HTML.
    CSS Flexbox & Grid: For responsive design and layout.
    Nginx: Reverse proxy and load balancer.
    Formspree: Handles the contact form submissions.
    LocalStorage: Used for dark/light mode persistence.
    AWS Elastic Beanstalk: Handles deployment of the Node.js app.
    GitHub Actions: CI/CD pipeline for automated deployment to AWS Elastic Beanstalk.

CI/CD with GitHub Actions

The project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to AWS Elastic Beanstalk. Each time a change is pushed to the main branch, the workflow is triggered to automatically deploy the updated code to AWS.
GitHub Actions Workflow

Here’s an example of the .github/workflows/deploy.yml file that automates the deployment process:

yaml

name: Deploy to AWS Elastic Beanstalk

on:
  push:
    branches:
      - main  # Deploys on push to main branch

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.x'

      - name: Install dependencies
        run: npm install

      - name: Install AWS Elastic Beanstalk CLI
        run: |
          sudo apt-get update
          sudo apt-get install -y python3-pip
          pip3 install awsebcli  # Install Elastic Beanstalk CLI

      - name: Deploy to AWS Elastic Beanstalk
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'us-west-2'  # Set your AWS region
        run: |
          eb init --platform node.js --region $AWS_REGION  # Initialize Elastic Beanstalk
          eb deploy portfolio-env --staged  # Deploy to Elastic Beanstalk environment

Secrets Configuration

You’ll need to add the following secrets in your GitHub repository under Settings > Secrets and Variables > Actions:

    AWS_ACCESS_KEY_ID: Your AWS access key.
    AWS_SECRET_ACCESS_KEY: Your AWS secret access key.

These secrets are used in the CI/CD pipeline to authenticate with AWS and deploy the application.

## Elastic Beanstalk Deployment
This project is deployed using AWS Elastic Beanstalk, a fully managed service that handles the deployment, scaling, and monitoring of applications. Install the AWS EB CLI: Install the AWS Elastic Beanstalk CLI locally: pip install awsebcli -> Initialize Elastic Beanstalk: Run this command to initialize your Elastic Beanstalk environment: eb init -> Deploy to Elastic Beanstalk: Once initialized, deploy your application with: eb deploy. 
---

## License

This project is licensed under the MIT License.
