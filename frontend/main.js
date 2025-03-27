// Get DOM elements
const searchInput = document.getElementById('searchInput');
const scrapeButton = document.getElementById('scrapeButton');
const resultsContainer = document.getElementById('results');
const loadingIndicator = document.getElementById('loadingIndicator');

// Function to render products on the page
function renderProducts(products) {
  resultsContainer.innerHTML = ''; // Clear previous results

  if (!products || products.length === 0) {
    resultsContainer.textContent = 'No products found.';
    return;
  }

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.imageUrl}" alt="Product Image">
      <div class="product-content">
        <h2>${product.title}</h2>
        <p>Rating: ${product.rating}</p>
        <p>Reviews: ${product.reviewCount}</p>
        <a href="${product.productUrl}" target="_blank">View Product</a>
      </div>
    `;
    resultsContainer.appendChild(productDiv);
  });
}

// Event listener for the search button
scrapeButton.addEventListener('click', async () => {
  const keyword = searchInput.value.trim();
  if (!keyword) {
    resultsContainer.textContent = 'Please enter a keyword.';
    return;
  }

  // Show loading indicator
  resultsContainer.innerHTML = '';
  loadingIndicator.classList.remove('hidden');

  try {
    const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);

    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    renderProducts(data);
  } catch (error) {
    resultsContainer.textContent = 'An error occurred while fetching products.';
    console.error(error);
  } finally {
    loadingIndicator.classList.add('hidden');
  }
});
