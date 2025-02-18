const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

let currentInput = '';

// Memperbarui tampilan
function updateDisplay() {
    display.value = currentInput;
}

// Event listener untuk semua tombol
buttons.addEventListener('click', (event) => {
    const target = event.target;
    const value = target.dataset.value;  // Menggunakan data-value


    if (value) { // Periksa apakah tombol punya data-value
        if (value === 'AC') {
            currentInput = '';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                currentInput = math.evaluate(currentInput).toString(); //math.js, dan jadi string.
            } catch (error) {
                currentInput = 'Error';
            }
        }
        else {
            currentInput += value;
        }
        updateDisplay();
    }
});
