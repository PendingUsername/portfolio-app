# Personal Portfolio Website

This is a personal portfolio website built with **Node.js** and served using **Nginx**. It features a clean, dark-themed design, showcasing personal projects, skills, and a contact form. The site is fully customizable, and the content can be updated to reflect your latest projects and achievements.

## Features

- Dark-themed design with a custom background image.
- Circular profile picture and brief personal bio.
- Showcase of personal projects with custom backgrounds and hover effects.
- Clickable GitHub links for each project to view code.
- Skills section with a neat display of various technologies.
- Contact form integrated with **Formspree** for receiving messages.
- Downloadable resume in PDF format.
- Responsive design that adapts to various screen sizes.

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YourUsername/portfolio-website.git
   cd portfolio-website

    Install Dependencies Make sure you have Node.js installed. Then, install the required Node.js packages:

bash

npm install

Run the App Locally Start the app using Node.js:

bash

node app.js

Serve with Nginx (Optional) You can use Nginx to serve the website. The configuration for Nginx will look something like this:

nginx

    server {
        listen 80;
        server_name yourdomain.com;
        
        location / {
            proxy_pass http://localhost:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

Project Structure
```bash
portfolio-app/
├── public/
│   ├── images/           # Profile picture, background images, and project images
│   └── css/
│       ├── styles.css    # Main styles for the site
├── views/
│   ├── index.ejs         # Main HTML template for the portfolio
├── app.js                # Node.js app entry point
├── package.json          # NPM dependencies and scripts
└── README.md             # Project documentation

Customization

    Profile Picture: Replace the profile.jpg in the public/images folder with your own image.
    Background Image: Replace the background.jpg file in the public/images folder to change the site’s background.
    Projects: Update the project cards in index.ejs with your projects, adding links to your GitHub repos.
    Skills: Add, remove, or update skills in the #skills section in the HTML.
    Contact Form: The contact form is powered by Formspree. Update the form action with your Formspree URL to start receiving messages.

To-Do

-Add more projects and update project backgrounds.
-Improve responsiveness on mobile devices.
-Add a blog section to share articles and tutorials.
-Better UX/UI




### Breakdown:
1. **Features**: Lists the main features of the site.
2. **Installation and Setup**: Instructions to run the project locally.
3. **Project Structure**: Gives an overview of the folder structure.
4. **Customization**: Instructions on how to change profile pictures, background images, projects, and more.
5. **To-Do**: A section where you can add features you plan to work on in the future.
6. **License**: Default placeholder for the project’s license.

Feel free to modify and extend it as your project evolves! Let me know if you need more 
