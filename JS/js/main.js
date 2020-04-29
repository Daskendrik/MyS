
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