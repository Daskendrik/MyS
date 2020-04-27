
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