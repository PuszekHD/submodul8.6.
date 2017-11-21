var a = 5;

var b = 10;

var operate1 = (a * a) - (2 * a * b) + (b * b);

var value = operate1;
console.log(value);

if (value > 0) {
    console.log('warunek dodatni');
} else {
    console.log('warunek ujemny')
}

var isItZero = value === 0 ? 'wynik równy 0' : 'wynik różny od 0';
console.log(isItZero);