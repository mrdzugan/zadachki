'use strict';

// ============= WHILE

task2();

// #1

function task1() {
    let count = Number(prompt('Input your count'));

    while (count-- > 0) {
        document.write('#');
    }
}

// #2

function task2() {
    let value = Number(prompt('Input your value'));

    if (value < 0) {
        value--;
        while (value++ < 0) {
            document.write(`${value} `);
        }
    } else {
        value++;
        while (value-- > 0) {
            document.write(`${value} `);
        }
    }
}

// #3

function task3() {
    let val = Number(prompt('Input your number'));

    let power = Number(prompt('Input your power'));

    let result = 1;

    let tmp_power = Math.abs(power);

    while (tmp_power-- > 0) {
        result *= val;
    }

    power > 0 ? document.write(result) : document.write(1 / result);
}

// #4

function task4() {
    let val1 = Number(prompt('Input first number'));

    let val2 = Number(prompt('Input second number'));

    let divider = val1 < val2 ? val1 : val2;

    divider++;

    while (divider-- > 0) {
        if (val1 % divider === 0 && val2 % divider === 0) {
            document.write(divider);
        }
    }
}

// #5

function task5() {
    let n = Number(prompt('Input your number'));

    let fact = 1;

    while (n--) {
        fact *= n + 1;
    }

    document.write(fact);
}


