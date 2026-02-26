const restaurants = [
    {
        id: 1,
        name: "Pizza Place",
        cuisine: "Italian",
        rating: 4.5,
        menu: [
            { item: "Margherita Pizza", price: 250 },
            { item: "Pepperoni Pizza", price: 300 }
        ]
    },
    {
        id: 2,
        name: "Burger Hub",
        cuisine: "Fast Food",
        rating: 4.2,
        menu: [
            { item: "Cheese Burger", price: 150 },
            { item: "Veggie Burger", price: 120 }
        ]
    }
];

module.exports = { restaurants };