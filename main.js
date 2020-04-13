function calculate(inputValue) {

    console.log(inputValue);

    const expression = /\+|\-|\*|\//;
    const regOp = /\^[0-9]*$/;
    const numbers = inputValue.split(expression)

    const numberA =parseInt(numbers[0]);
    const numberB =parseInt(numbers[1]);
    const operation = inputValue.match(expression)

    const calculator = new Calculator();
    calculator.add(numberA);

    // console.log(numbers);

    // let operation = inputValue.replace(/[0-9]/g, ' ');

    // operation = operation.split(' ');

    // operation = operation.filter( function (el) {
    //     if(el !== '') {
    //         return el;
    //     }
    // })

    // operation = operation.filter(el => el !== '')

    // console.log(operation);

    if(Number.isNaN(numberA) || Number.isNaN(numberB) || operation===null){
        updateResult('Operation not recognized');
        return;
    }
    
    let result;
    switch(operation[0]) {
        case '+': 
            result = calculator.add(numberB);
            break;
        case '-': 
            result = calculator.substract(numberB);
            break;
        case '*': 
            result = calculator.multiply(numberB);
            break;
        case '/': 
            result = calculator.divide(numberB);
            break;
    }

    updateResult(result);
   
}

function updateResult(result) {
    const element = document.getElementById('result');

    if(element) {
        element.innerText = result;
    }
};

function showVersion() {
    const calculator = new Calculator();
    const element = document.getElementById('version');

    calculator.version
        .then(function(version) {
            element.innerText = version;
        })
    .catch(function(error) {
        element.innerText = 'unknown';
    })
    
}