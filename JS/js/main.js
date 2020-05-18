
"use strict";

function alert_1() {
    alert("Хай пипл!")
}

function prompt_1() {
    let age = prompt('Сколько тебе лет?', 100);
    alert(`Тебе ${age} лет!`); // Тебе 100 лет!
}

function confirm_1() {
    let isBoss = confirm("Дашка главная?");
    alert( isBoss ); // true, если нажата OK
}

function else_if() {
    let a;
    let age = prompt('Сколько вам лет?', '');
    if (age>20) {
        a = 'взрослый';
    } else {
        a = 'мелкий';
    }
    // теперь используем ?
    let b = (age>20) ? 'взрослый' : 'мелкий';
    alert(a);
    alert(b);
}

function while_break() {
    let sum = 0;
    while(true){
        let value = +prompt("Введите число", '');
        if(!value) break;
        sum+=value;
    }
    alert ('Сумма: ' + sum);
}

function outer_mark() {
    outer:for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let input = prompt ('Значение на координатах (${i}),${j}', '');
            if(!input) break outer;
        }
    }
    alert('Готово');
}

//Раздел задачи/тесты
function les_1() {
    alert("Раз, раз, првоерка связи! :)");
}

function les_2() {
    let admin,
        name;
    name = 'Дашка';
    admin = name;
    alert(admin);
}

function les_3_1() {
    let orange = "2",
    apple = "3";
    alert(orange+apple) //Так как у нас обе переменные строки, у нас будет сложение строчных,  то есть "2" слепится с "3"
}

function les_3_2() {
    let orange = "2",
    apple = "3";
    alert(+orange + +apple) 
}

function les_4() {
    let age = prompt('Ваш возраст', '');
    (age > 20) ? 
        alert('взрослый') : alert('мелкий');
}

function les_5() {
    alert(1 || 0); // Нам выведет 1, так как первое истинное значение это 1
    alert(null || 0 || 10); //Нам выведет 10, так как перед этим значения - ложь
}

function les_6() {
    let x;
    true || (x=1); //в выражении мы сразу натыкаемся на правду, поэтому вычисление останавливается, присовения 1 иксу не происходит
    alert(x); //undefined, потому что (x = 1) не вычисляется
    false || (x=1) //в выражении мы сразу натыкаемся на ложь, поэтому процесс вычисления продолжается, присовения 1 иксу  происходит
    alert(x);
}

function les_7() {
    let login = prompt('Введите логин', '');
    if (login == 'Админ') {
        let pass = prompt('Введите пароль', '');
        if (pass == 'Я главная') {
            alert('Здравствуйте!');
        } else if (pass == null) {
            alert('Отменено');
        } else {
            alert('Неверный пароль')
        }
    } else if (login == null) {
        alert('Отменено');
    } else {
        alert('Я вас не знаю')
    }
}

function les_8(argument) {
    end:
    while(true){
        let a = prompt('Введите число больше 100', '');
        if (a>100 || !a) {
            break end
        } else {
            alert('Неверно! Попробуйте еще раз!')
        }
    }
}

function les_9() {
    
        let a = prompt('Введите до какого числа необходимо найти простые числа', '');
        for (let i = 2; i<=a; i++){
            for(let j = 2; j<=i; j++){
                if (j==i) {
                    alert(i);
                } else if (i % j == 0) {
                    break;
                }
            }
        }
}