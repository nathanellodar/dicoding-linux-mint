// java script mampu menangani kasus seperti dibawah

greetWorld();

function greetWorld() {
    console.log('Hello, world!');
}


// default parameter
function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);
}

function generateGreetingWorldMessage() {
    return 'Halo, dunia!';
    console.log('Aku tidak akan tampil!'); // ini tidak akan dieksekusi karena program berhenti diretyrn statement
}

const message = generateGreetingWorldMessage();
console.log(message);


// bentuk lain atau cara lain membuat function
const pertambahan = function (a, b) {
    return a + b
}

// function bisa menjadi sebuah parameter dan dipergunakan didalam function laiinnya
function multiply(a, b) {
    return a * b;
}

function calculate(operation, numA, numB) {
    return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

// ada model seperti ini lagi
function multiplier(x) {
    return function (num) {
        return x * num;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));

// ada namanya arrow function
const convertCelsiusToFahrenheit = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(90);