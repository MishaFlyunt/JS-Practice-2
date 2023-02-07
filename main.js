//JS-LOOPS

//1 Створити масив mas, заповнити масив рандомними значеннями (кількість
// елементів масиву 60)
let mass = [];
for (i = 0; i <= 60; i++) {
    mass.push(Math.floor(Math.random() * 50))
}
console.log(mass);

//2 В заповненому масиві mas перевірити кількість значень що більші за 30
let small = 0;
for (let i = 0; i < mass.length - 1; i++) {
    if (mass[i] > 30) {
        small++
    }
}
console.log(`Більші 30 - ${small}`);

//3 В заповненому масиві mas порахувати суму елементів
let sum1 = 0;
for (let i2 = 0; i2 < mass.length - 1; i2++) {
    sum1 += mass[i2];
}
console.log(`Сума всіх значень - ${sum1}`);

//4 В заповненому масиві mas порахувати парних по індексу елементів
// 5 В заповненому масиві mas порахувати непарних по індексу елементів
let pair = 0;
let notPair = 0;
for (let i = 0; i <= mass.length - 1; i++) {
    if (i % 2 == 0) {
        pair++
    } else if (i % 2 != 0) {
        notPair++
    }
}
console.log(`Парні - ${pair}`);
console.log(`Непарні - ${notPair}`);

//6 В заповненому масиві mas всім непарним значенням додати +1 (утворити парні)
let mass1 = [];
for (let i = 0; i < mass.length - 1; i++) {
    if (mass[i] % 2 != 0) {
        let notPar = mass[i] + 1;
        mass1.push(notPar);
    } else {
        let par = mass[i];
        mass1.push(par);
    }
}
console.log(`До непарних +1 - ${mass1}`);