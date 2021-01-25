/**
 * Адрес сайта.
 * @type {string}
 */
var site;

/**
 * Кодовое слово.
 * @type {string}
 */
var salt;

/**
 * Секретное число.
 * @type {number}
 */
var secNum;

/**
 * Текстовые данные для пароля.
 * @type {string}
 */
var text;

/**
 * Пароль.
 * @type {string}
 */
var password;

/**
 * Временное хранилище исходного пароля.
 * @type {string}
 */
var sourcePass;

/**
 * Спецсимволы для добавления в пароль.
 * @type {string}
 */
var symbols = '%:*#@%&';

/**
 * Функция создания пароля с полседующим его выводом на экран.
 */
function generate() {
    /**
     * Сохраняем текстовые значения в переменные.
     */
    site   = document.getElementById('site_url').value;
    salt   = document.getElementById('keyword').value;
    secNum = document.getElementById('secnumber').value;

    /* Введенное число не должно быть меньше 1. */
    if (secNum < 1) secNum = 1;

    text = site + salt + 'Medyanik Artem amedyanik.dev@gmail.com';

    /**
     * Создаем пароль на основе функции, подключенной в заголовке документа.
     */
    sourcePass = md5(text);

    /**
     * Обнуляем переменную, в которой будет храниться измененный пароль.
     */
    password = '';

    /**
     * Цикл отвечает за большие числа и спецсимволы в пароле;
     * проходит всю длину строки и обрабатывает каждый символ.
     */
    for (var i=0; i< sourcePass.length; i++) {

        /**
         * Секретным числом определяем шаг, с которым будем делать следующую заглавную букву в пароле.
         */
        var upperStep = secNum % 3;

        /**
         * Если шаг сработал — делаем большой символ, иначе оставляем старый.
         */
        if (i % upperStep == 0) { password += sourcePass[i].toUpperCase(); } 
        else { password += sourcePass[i]; }

        /**
         * Если поставлена галочка "Использовать спецсимволы"...
         */
        if (document.getElementById('sym').checked) {
            /**
             * На каждой третьей итерации вставляем спецсимвол на нужное место.
             */
            if (i % 3 == 0) { password += symbols[secNum % 6]; } 
        }
    } 
    
    /**
     * Помещаем пароль в промежуточную переменную перед тем,
     * как разбивать его на тройки.
     */
    sourcePass = password;

    /**
     * Обнуляем строку — в неё будем заново собирать наш пароль из троек.
     */
    password = '';
    
    /**
     * Если секретное число больше, чем количество групп из трёх символов в исходном пароле -
     * — прогоняем тройки по кругу, возвращаемся в начало и останавливаемся на нужной позиции.
     */
    if (Number(secNum) * 3 > sourcePass.length) { secNum = (Number(secNum) * 3) % sourcePass.length; }
    else { nsecNum = secNum * 3; }

    /**
     * Формируем пароль из групп по три символа с разделителем
     */
    for (var i = 1; i < 10; i++) {

        /**
         * Если после сложения превышена длину исходного пароля — 
         * - возвращаемся в начало, чтобы продолжить на следующем шаге с первого.
         */
        if (sourcePass.length == secNum + i) { secNum = -i; }

        /**
         * Добавляем очередной символ в группу из трёх символов.
         */
        password += sourcePass[secNum + i];

        /**
         * Если прошло уже три символа — добавляем разделитель (а после девятого символа — не добавляем).
         */
        if ((i % 3 == 0) && (i % 9 != 0)) { password += '-'; }
    }

    /**
     * Вывод результата на экран.
     */
    document.getElementById('pass_text').innerHTML = password;
}

document.getElementById('ad_enc').addEventListener('change', () => {
    adEncCounter = document.getElementById('ad_enc_counter');
    if (adEncCounter.disabled) adEncCounter.disabled = false;
    else adEncCounter.disabled = true;
});

document.getElementById('keyword').addEventListener('keydown', (e) => {
    generate();
});