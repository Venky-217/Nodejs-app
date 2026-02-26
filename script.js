const restaurantContainer = document.getElementById('restaurants');

fetch('http://localhost:5000/api/restaurants')
    .then(res => res.json())
    .then(data => {
        data.forEach(restaurant => {
            const card = document.createElement('div');
            card.className = 'restaurant-card';

            card.innerHTML = `
                <h3>${restaurant.name}</h3>
                <p>Cuisine: ${restaurant.cuisine}</p>
                <p>Rating: ${restaurant.rating}</p>
                <h4>Menu:</h4>
                ${restaurant.menu.map(item => `<div class="menu-item"><span>${item.item}</span><span>₹${item.price}</span></div>`).join('')}
            `;

            restaurantContainer.appendChild(card);
        });
    })
    .catch(err => console.error(err));