// Counter Program

const decreaseBtn = document.getElementById('decrementButton');
const increaseBtn = document.getElementById('incrementButton');
const resetBtn = document.getElementById('resetButton');
const countLabel = document.getElementById('countLabel');
const errorMessage = document.getElementById('errorMessage');

let count = 0;

/**
 * Event listeners for the buttons that increment, decrement, and reset the count
 */
increaseBtn.onclick = () => {
    errorMessage.textContent = '';
    count++;
    countLabel.textContent = count;
}

/**
 *  Decrements the count and displays an error message if the count is less than 0
 */
decreaseBtn.onclick = () => {
    if (count === 0) {
        return errorMessage.textContent = 'Count cannot be less than 0';
    }
    count--;
    countLabel.textContent = count;
}

/**
 * Resets the count to 0
 */
resetBtn.onclick = () => {
    count = 0;
    countLabel.textContent = count;
}