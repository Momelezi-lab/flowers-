document.addEventListener("DOMContentLoaded", function() {
    // Flower options
    const flowers = [
        { name: "Rose", price: 5 },
        { name: "Tulip", price: 3 },
        { name: "Lily", price: 4 },
        // Add more flowers as needed
    ];

    const flowersContainer = document.getElementById("flowers-container");
    const bouquetList = document.getElementById("bouquet-list");

    // Populate flower options dynamically
    flowers.forEach(flower => {
        const option = document.createElement("option");
        option.value = flower.name;
        option.textContent = `${flower.name} - $${flower.price.toFixed(2)}`;
        flowersContainer.appendChild(option);
    });

    // Event listener for adding flowers to the bouquet
    document.getElementById("flowers-container").addEventListener("change", function() {
        const selectedFlower = flowers.find(flower => flower.name === this.value);

        if (selectedFlower) {
            const listItem = document.createElement("li");
            listItem.textContent = `${selectedFlower.name} - $${selectedFlower.price.toFixed(2)}`;
            bouquetList.appendChild(listItem);
        }
    });
});