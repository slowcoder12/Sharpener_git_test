document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let candyName = document.getElementById('candyName').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    const itemsList = document.getElementById('itemsList');

    const div = document.createElement('div');
    div.innerHTML = `
        <div>${candyName} - ${description} - $${price} - <span class="displayedQuantity">${quantity}</span> pcs</div>
        <button class="btn btn-primary btn-sm edit-btn buy-btn" data-quantity="1">Buy one</button>
        <button class="btn btn-primary btn-sm edit-btn buy-btn" data-quantity="2">Buy two</button>
        <button class="btn btn-primary btn-sm edit-btn buy-btn" data-quantity="3">Buy three</button>
    `;

    itemsList.appendChild(div);

    const displayedQuantity = div.querySelector('.displayedQuantity');
    const buyButtons = div.querySelectorAll('.buy-btn');

    const items = {
        CandyName: candyName,
        Description: description,
        Price: price,
        Quantity: quantity
    };

    axios.post('https://crudcrud.com/api/ac184d3ed7cc44cbb0bf3bac8b15b43e/items', items)
        .then(response => {
            console.log('Item added successfully:', response.data);

            buyButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const buyQuantity = parseInt(button.getAttribute('data-quantity'));
                    const newQuantity = parseInt(displayedQuantity.textContent) - buyQuantity;

                    if (newQuantity >= 0) {
                        displayedQuantity.textContent = newQuantity;
                        const itemId = response.data._id;
                        const updatedItem = { CandyName: candyName,
                            Description: description,
                            Price: price, Quantity: newQuantity };

                        axios.put(`https://crudcrud.com/api/ac184d3ed7cc44cbb0bf3bac8b15b43e/items/${itemId}`, updatedItem)
                            .then(response => {
                                console.log('Quantity updated successfully:', response.data);
                            })
                            .catch(error => {
                                console.error('Error updating quantity:', error);
                            });
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error adding item:', error);
        });
});
