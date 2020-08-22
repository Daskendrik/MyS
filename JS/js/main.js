
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

function switch_case() {
    let a = "1";
    let b = 0;
    switch (+a) {
        case b + 1:
            alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
            break;
        default:
            alert("Это не выполнится");
    }
}

function showMessage(from, text) {
    alert(from + ': ' + text);
}

function showFun() {
    function sayHi() {
        alert( "Привет" );
    }
    alert( sayHi ); // выведет код функции
}

function copyOb() {
    let user = { 
        name: 'John',
        age: '20'
    };

    let admin = user; // мы скопировали самы ссылки, еще одного name и age не появились

    alert(user.name + ' ' + admin.age);
    
    admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
    user.age = '50' // изменено по ссылке из переменной "user"

    alert(user.name + ' ' + admin.age); 
}

function const_ob_1() {
    const user = {
        name: "Dashka"
    }

    user.name = 'Daria'
    user.age = 26;

    alert(user.name + ' ' + 'возраст' + ' ' + user.age );
}

function const_ob_2() {
    const user = {
        name: "Dashka"
    }
    // Дальше ошибка
    //const user = {
        //name: "Daria"
    //}

    //alert(user.name);
}

function copy_ob_1() {
    let user = {
        name: "John",
        age: 30
    };

    let clone = {}; // новый пустой объект

    // скопируем все свойства user в него
    for (let key in user) {
    clone[key] = user[key];
    }

    // теперь в переменной clone находится абсолютно независимый клон объекта.
    clone.name = "Pete";
    clone.age = 25 // изменим в нём данные

    alert('Первый объект:' + ' ' +  user.name + ' ' + user.age ); // в оригинальном объекте значение  осталось прежним 
    alert('Второй объект:' + ' ' + clone.name + ' ' + clone.age);
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

function les_10() {
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('А родители разрешили?');
        }
    }
    let age = prompt('Сколько вам лет?', 18);

    if ( checkAge(age) ) {
    alert( 'Доступ получен' );
    } else {
    alert( 'Доступ закрыт' );
    }
}

function les_11() {
    let a = prompt('Чему равно а', '0');
    let b = prompt('Чему равно b', '0');
    alert(Les_11_1(a, b));

}

function Les_11_1(a, b) {
    if (a>b) {
        return a;
    } else if (a == b) {
        return 'Они равны';
    } else {
        return b;
    }
}

function les_12() {
    function ask(question, yes, no) {
        if (confirm(question)) yes()
            else no();
        }
        function showOk() {
            alert( "Вы согласны." );
        }
        function showCancel() {
            alert( "Вы отменили выполнение." );
        }  
    // использование: функции showOk, showCancel передаются в качестве аргументов ask
            ask("Вы согласны?", showOk, showCancel);
        }

function les_14() {
    // Сравнение объектов
    // Создадим основной объект
    let mainOb = {
        name: 'Daria',
        age: '26',
    }

    // Создадим объект, копию главного объекта
    let ownOb = mainOb;
    //alert(ownOb == mainOb); //true

    // Создадим объект, у которого параметры будут сслыться на параметры главного объекта
    let secOb = {
        s_name: mainOb.name,
        s_age: mainOb.age
    }
    //alert(secOb.s_name + ' ' + secOb.s_age)
    //alert(secOb == mainOb); //false

    //Создадим объект, и пропишем параметры главного
    let thOb = {
        name: 'Daria',
        age: '26',
    }
    //alert(thOb == mainOb); //false
    alert('Cравнение равенста объектов: \nmainOb и ownOb:' + ' ' + (ownOb == mainOb) + '\nmainOb и secOb:' + ' ' + (secOb == mainOb) + '\nmainOb и thOb:' + ' ' + (thOb == mainOb));



    // Сравнение внутренностей объектов
    alert('Cравнение равенста внутренностей(age) объектов: \nmainOb и ownOb:' + ' ' + (mainOb.age == ownOb.age) + '\nmainOb и secOb:' + ' ' + (secOb.age == mainOb.s_age) + '\nmainOb и thOb:' + ' ' + (thOb.age == mainOb.age));

    // изменим значение свойства третьего объекта, чтобы посмотреть, что будет со св-вом главного
    thOb.age = 50;
    alert('В третьем объекте св-во age:' + ' ' + thOb.age +  '\nА в первом:' + ' ' + mainOb.age)
    //а теперь со вторым
    secOb.s_age = 100;
    alert('Во втором объекте св-во age:' + ' ' + secOb.s_age +  '\nА в первом:' + ' ' + mainOb.age)

}

function les_15() {
    function isEmpty(obj) {
        for (let key in obj) {
            return false; // Если у нас начинается работать тело, то есть есть хотя бы 1 key (что то в обхекте), то тогда 
        }
        return true;
    }
    let schedule = {};

    alert( isEmpty(schedule) ); // true

    schedule["8:30"] = "get up";

    alert( isEmpty(schedule) ); // false
}

function les_16() {
    function isEmpty(obj) {
        for (let key in obj) {
            return false; // Если у нас начинается работать тело, то есть есть хотя бы 1 key (что то в обхекте), то тогда 
        }
        return true;
    }
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    if (isEmpty(salaries) == false) {
        let sum = salaries.John + salaries.Ann + salaries.Pete;
        alert('Сумма всех зарплат равна:' + ' ' + sum)
    } else {
        alert('зарплат неть, но вы держитесь')
    }
}

function les_16_1() {
    function isEmpty(obj) {
        for (let key in obj) {
            return false; 
        }
        return true;
    }
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
        Daria: 1000,
    }
    let sum = 0;
    if (isEmpty(salaries) == false) {
        for (let key in salaries) {
            sum = sum + salaries[key];
        }
    } else {
        alert('зарплат неть, но вы держитесь');
    }
    if (isEmpty(salaries) == false) {
        alert('Сумма всех зарплат равна:' + ' ' + sum);
    }
}

function les_17() {
    let menu = {
        width: 200,
        height: 300,
        title: 'Ширина и высота',
    }
    alert('Сначала у нас было так:' + ' ' + menu.title + ' ' + menu.width + ' ' + menu.height )
    //Проверка пустоты
    function isFull(obj) {
        for (let key in obj) {
            return true; 
        }
        return false;
    }
    //Проверка числа
    function isNumber(param) {
          if (typeof(param) == 'number') {
            return true;
          } else {
            return false;
          }
       }

    function multiplyNumeric(obj) {
        for (let key in obj) {
            let a = obj[key];
                if (isNumber(a)) {
                    a = a * 2;
                }
            obj[key] = a;
        }
    }

    if (isFull(menu)) {
        multiplyNumeric(menu);
        alert('После вызова multiplyNumeric(obj)' + ' ' + menu.title + ' ' + menu.width + ' ' + menu.height);
    } else {
        alert('Объект пуст')
    }

}

function les_18() {
    let calculator = {
        a: 0,
        b: 0,
        read() { 
            this.a = +prompt('Введите значение а:', [0]);
            this.b = +prompt('Введите значение b:', [0]);
        },

        sum() { 
            return this.a + this.b;
        },

        mul() {
            return  this.a * this.b;
        },

    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
}

function les_19() {
    function Accumulator(startingValue) {
        this.value = startingValue,

        this.read = function() {
            let a = prompt('На сколько прибавить?', 0);
            this.value = this.value + +a;
            // или одной строчкой this.value += +prompt('Сколько нужно добавить?', 0);
        }
    }

    let accumulator = new Accumulator(1); // начальное значение 1

    accumulator.read(); // прибавит ввод prompt к текущему значению
    accumulator.read(); // прибавит ввод prompt к текущему значению

    alert(accumulator.value); // выведет сумму этих значений
}

function les_20() {
    
    function readNumber() {
        //let a = prompt('Введите число');
        let num = {
            a: undefined,
        }
        

        do {
            num.a = prompt('Введите число');
            if (num.a == undefined || num.a == '') {
                return 'NuN';
            }
            if (isFinite(num.a)) {
                return num.a;
            }
        } while (!isFinite(num.a))
    }
    alert(readNumber())
}

function les_21() {
    function checkSpam(str) {
        let a = str.toLowerCase();
        if (a.includes("viagra") ||  a.includes("xxx")) {
            alert('true');
        } else {
            alert('false');
        }
    }

    checkSpam('buy ViAgRA now') //== true
    checkSpam('free xxxxx') //== true
    checkSpam("innocent rabbit") //== false
}

function les_22() {
    function truncate(str, maxlength) {
        let newstr = "";
        if (str.length > maxlength) {
            newstr = str.substring(0, maxlength - 1) + '…';
            return newstr;
        } else {
            newstr = str;
            return newstr;
        }
    }

    alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) //= "Вот, что мне хотело…"

    alert(truncate("Всем привет!", 20)) //= "Всем привет!"
}

function les_23() {
    function sumInput() {
        let arr = [];
        let a = true;
        let sum = 0;
        for (var i = 0; a; i++) {
            arr[i] = prompt('Введите число');
            if ((+arr[i] == 0 || isFinite(arr[i]) ) && arr[i] != '' && arr[i] != undefined) {
                sum = sum + +arr[i];
            } else {
                a = false;
            }
        }
        return sum;
    }
    alert(sumInput());
}

function les_24() {
    function getMaxSubSum(arr) {
        let sum = 0;
        let newArr = [];
        let newarrSum = []

        function checkSum(num) {
            if (num != undefined) {
                return true;
            } else {
                return false;
            }
            
        }
        //Созадю многомерный массив 
        for (var i = 0; i < arr.length; i++) {
            newArr[i] = [];
            let newSum = 0;
            let c = true;
            for (var b = 0; b < arr.length; b++) {

                if (i <= b) {
                    newArr[i][b] = arr[b];
                } else {
                    newArr[i][b] = 0;
                }
                //Решение не подходит, так как мы не знаем, какое следующее число
                /*if (newSum + newArr[i][b] > newSum && c == true) {
                    newSum = newSum + newArr[i][b];
                } else if (newSum + newArr[i][b] < newSum){
                    c = false;
                }*/
            }
            // Создаем массив сумм
            for (var b = 0; b < arr.length; b++) {
                if (newSum + newArr[i][b] > newSum && c == true) {
                    newSum = newSum + newArr[i][b];
                } else if (checkSum(newArr[i][b+1]) && newSum + newArr[i][b] + newArr[i][b+1] > newSum && c == true){
                    newSum = newSum + newArr[i][b];
                }
                else if (newSum + newArr[i][b] < newSum){
                    c = false;
                }
            }

            newarrSum[i] = newSum;

        }

        for (var i = 0; i < newarrSum.length; i++) {
            if (newarrSum[i] > sum) {
                sum = newarrSum[i];
            }
        }

        return sum;
    }
   /* alert(getMaxSubSum([-1, 2, 3, -9])) //= 5 (сумма выделенных)
    alert(getMaxSubSum([2, -1, 2, 3, -9])) //= 6
    alert(getMaxSubSum([-1, 2, 3, -9, 11])) //= 11
    alert(getMaxSubSum([-2, -1, 1, 2])) //= 3
    alert(getMaxSubSum([100, -9, 2, -3, 5]))// = 100
    alert(getMaxSubSum([1, 2, 3])) //= 6 (берём все)*/
    alert(getMaxSubSum([-1, 22, 1, -9, -11, -12, 21, -5, 5, 3]))

}