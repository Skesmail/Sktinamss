
document.getElementById('searchInput').addEventListener('input', function () {
    let searchValue = this.value.toLowerCase();
    document.querySelectorAll('.product').forEach(function (product) {
        const title = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = title.includes(searchValue) ? '' : 'none';
    });
});

document.getElementById('filterSelect').addEventListener('change', function () {
    const products = Array.from(document.querySelectorAll('.product'));
    let sorted;
    if (this.value === 'low') {
        sorted = products.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (this.value === 'high') {
        sorted = products.sort((a, b) => b.dataset.price - a.dataset.price);
    } else {
        sorted = products;
    }
    const container = document.getElementById('products');
    products.forEach(product => container.appendChild(product));
});
