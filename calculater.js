let input = ''; // Variable to store the current input
let operator = ''; // Store the operator (+, -, *, /)
let firstValue = ''; // Store the first operand

// Display function for calculator buttons
function display(value) {
    let displayElement = document.getElementById('display');
   
    if (value === 'del') {
        input = '';
        operator = '';
        firstValue = '';
        displayElement.innerText = '';
    } else if (value === '=') {
        if (firstValue !== '' && operator !== '' && input !== '') {
            let result;
            let secondValue = parseFloat(input);
            if (operator === '+') {
                result = parseFloat(firstValue) + secondValue;
            } else if (operator === '-') {
                result = parseFloat(firstValue) - secondValue;
            } else if (operator === '*') {
                result = parseFloat(firstValue) * secondValue;
            } else if (operator === '/') {
                result = parseFloat(firstValue) / secondValue;
            }

            // Display the result
            displayElement.innerText = foratResult(result);
            input = result.toString();
            firstValue = ''; 
            operator = ''; 
        }
    } else if (['+', '-', '*', '/'].includes(value)) {
        // Store the first value and the operator
        if (input !== '') {
            firstValue = input;
            operator = value;
            input = ''; 
        }
    } else {
        // Append number to the input and display it 
        input += value;
        displayElement.innerText = input;
        displayElement.scrollLeft = displayElement.scrollWidth;
    }
}

// Function to format the result like a real calculator
function foratResult(result){
    if(Math.abs(result) > 99999999 || Math.abs(result) < 0.0001){
        return result.toExponential(5);
    }
    return result.toString();
}

// Function to handle key press events
document.addEventListener('keydown', function(event){
    const key = event.key;

    if(!isNaN(key)){
        display(key);
    }
    else if(key === '+' || key === '-' || key ==='*' || key === '/'){
        display(key);   
    }
    else if(key === 'Enter'){
        display('=')
    }
    else if(key === 'Backspace'){
        display('del')
    }
    else if(key === '.'){
        display('.');
    }
});