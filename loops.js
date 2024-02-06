// task_1 //

//Вивести всі непарні числа//

for (let i = 1; i <= 200; i +=2) {
    console.log(i)
}




// task_2 //

//Вивети всі квадрати числ від 1 до 10//

for (let x = 1; x <= 10; x++) {
    let kvadroo = x ** 2;
    console.log(kvadroo);
}


// Так як я жалівся на нерозуміння js, мені стало дуже цікаво, як можна ще зробити це завдання, і спробував ще таким способом, і воно вийшло гуд :)

let kvadrat = [];

for (let y = 1; y <= 10; y++) {
    let kvadroo = y ** 2;
    kvadrat.push(kvadroo);    
}

console.log(kvadrat);




// task_3 //

//порахувати кількість літер у слові//

let word = "hello";
//let word = "hello world";
let letterCount = {};

let deleteSpace = word.replace(/\s/g, ''); //довго гуглив, шоб прибрати той пробіл, який мені весь час рахувало

for (let i = 0; i < deleteSpace.length; i++) {
    let character = deleteSpace[i].toLowerCase();
    if (character.match(/[a-z]/)) {
        letterCount[character] = (letterCount[character] || 0) + 1;
    }
}

for (let letter in letterCount) {
    console.log(letter + '=' + letterCount[letter]);
}
