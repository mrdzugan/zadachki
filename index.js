'use strict';

task1(); // to check: task{number_of_task}();

// ============= WHILE

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

// ============= DO WHILE

// #6

function task6() {
    let value;
    do {
        value = Number(prompt('2 + 2 * 2 = '));
    } while (value !== 2 + 2 * 2);
}

// #7

function task7() {
    let count = 0, val = 1000;
    const divider = 2;
    do {
        count++;
        val /= divider;
    } while (val >= 50);
    document.write(`value = ${val}, count = ${count}`);
}

// ============= FOR

function task8() {
    const value = Number(prompt('Input your value'));
    for (let i = 1; i <= 100; ++i) {
        if (i % value === 0) {
            document.write(`${i} `);
        }
    }
}