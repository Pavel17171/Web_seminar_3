// Функция запроса температуры в градусах цельсия
function interTemp() {
    var temperature = +prompt('Введите температуру по Цельсию: ');
    return temperature;
}

// Функция перевода градусов цельсия в градусы по фаренгейту
function temperatureConvert(interNum) {
    var tempFar = (9 / 5) * interNum + 32;
    tempFar = +tempFar.toFixed(2);
    return tempFar;
}

// Функция вывода сообщения с исходными данными и результатом перевода
function printRes() {
    var a = interTemp();
    var b = temperatureConvert(a);
    alert(`Цельсий: ${a}, Фаренгейт: ${b}`);
}

// Функция вопроса на повторение перевода градусов
function question() {
    ans = confirm('Ещё? ');
    return ans;
}

// Функция для работы, объединяющая другие функции
function convert() {
    alert('Добрый день!')
    printRes();
    answer = question();
    while (answer) {
        printRes();
        answer = question();
    }
    alert('До новых встреч!');
}

// Вызов функции
convert();