# Lab 4 – Express Website

## Description
This is a simple Node.js and Express web application that serves multiple HTML pages through defined routes.  
The app demonstrates key Express concepts, including:
- Using static HTML files with `res.sendFile()` (`index.html`, `about.html`, `contact.html`, `date.html`)
- Logging HTTP requests using chaining with `next()`
- Creating dynamic routes using parameters (e.g., `/welcome/:name`)

It was developed as part of the Goldsmiths University Web Development Lab 4 (Express) coursework.

---

## Installation and Setup

### 1. Clone or upload the project
If working on the Goldsmiths server:
```
cd ~
git clone https://github.com/squalor0/04_express_33773169 04_express_33773169
cd 04_express_33773169
```

### 2. Install dependencies
```
npm install
```

### 3. Run the application
Run locally:
```
node index.js
```
---

## Accessing the App

### Public URL
```
https://doc.gold.ac.uk/usr/380/
```

### Local Test URL
```
http://localhost:8000/
```

### Available Routes
| Route | Description |
|-------|--------------|
| `/` | Homepage |
| `/about` | About page |
| `/contact` | Contact page |
| `/date` | Shows today’s date |
| `/welcome/:name` | Displays a personalised welcome message |

---

## Technologies Used
- Node.js – JavaScript runtime environment  
- Express.js – Web framework for Node.js  
- HTML5 – Page structure and content  
- Forever – Process manager to keep Node running  
- Git/GitHub – Version control and submission


