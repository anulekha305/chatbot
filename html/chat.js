const ticketPriceInput = document.getElementById('ticketPrice');
const ticketQuantityInput = document.getElementById('ticketQuantity');
const totalCostSpan = document.getElementById('totalCost');

function calculateTotalCost() {
    const ticketPrice = parseFloat(ticketPriceInput.value);
    const ticketQuantity = parseInt(ticketQuantityInput.value);
    const totalCost = ticketPrice * ticketQuantity;
    totalCostSpan.textContent = totalCost.toFixed(2);
}

function bookTickets() {
    alert(`You have booked ${ticketQuantityInput.value} tickets for a total of $${totalCostSpan.textContent}`);
}

ticketPriceInput.addEventListener('input', calculateTotalCost);
ticketQuantityInput.addEventListener('input', calculateTotalCost);