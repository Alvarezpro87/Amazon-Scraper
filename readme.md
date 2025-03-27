# **Amazon Product Scraper** :shopping_cart:

A simple tool to scrape Amazon product listings from the first page of search results for a given keyword.

<br />

## :sparkles: **Overview**

This project demonstrates a basic setup for scraping product data from Amazon’s search results page. With **Bun** for the backend, **Vite** for the frontend, and libraries like **Express**, **Axios**, and **JSDOM**, you can search for products by a keyword and retrieve details such as:

- Product Title  
- Rating (stars out of five)  
- Number of reviews  
- Product Image URL  

<br />

## :rocket: **Features**

- **Bun + Express** for a lightweight, fast backend
- **Axios** for HTTP requests to Amazon
- **JSDOM** for parsing and extracting HTML content
- **Vite + Vanilla JavaScript** on the frontend
- Simple UI to enter a keyword and view product listings
- Responsive design and user-friendly interface

<br />


<br />

## :gear: **Requirements**

- [Bun](https://bun.sh/) installed
- (Recommended) [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) for Windows users or a UNIX-based environment (macOS, Linux)
- NodeJS is _not_ strictly required, but you may use it if you prefer for frontend bundling

<br />

## :wrench: **Installation & Setup**

### **1. Clone or Download the Repository**
```bash
git clone https://github.com/Alvarezpro87/Amazon-Scraper.git
```
### **2. Install Bun**
```bash
curl -fsSL https://bun.sh/install | bash
# Reload shell
source ~/.bashrc
# Verify installation
bun --version
```
## :electric_plug: **Backend Setup (Bun + Express)**

1. **Navigate to the backend folder**:
   ```bash
   cd backend
   ```
2. **Install depdencies**:
   ```bash
   bun install
   ```
3. **Run the server**:
   ```bash
   bun run src/index.js

   ```
- This usually starts at http://localhost:3000.
4. **Scraping Endpoint**:
   - GET request with query parameter ?keyword=YOUR_KEYWORD
   - Exemple:
   ```bash
   http://localhost:3000/api/scrape?keyword=iphone

   ```
## :computer: **Frontend Setup (Vite + Vanilla JS)**

1. **Open a second terminal in the `frontend` folder**:
   ```bash
   cd ../frontend
   ```
2. **Install dependencies:**:
   ```bash
   npm install
   ```
3. **Run the development server:**:
   ```bash
   npm run dev
   ```
- This usually starts at http://localhost:5173.
4.Test the application
- Open your browser at http://localhost:5173
- Enter a keyword (e.g., iphone) in the input box.
- Click the Search button.
- The frontend calls the backend API, retrieves product data from Amazon, and displays it nicely.






