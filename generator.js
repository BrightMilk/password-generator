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
        var upperstep = secnum % 3;

        /**
         * Если шаг сработал — делаем большой символ, иначе оставляем старый.
         */
        if (i % upperstep == 0) { password += sourcePass[i].toUpperCase(); } 
        else { password += sourcePass[i]; }

        /**
         * Если поставлена галочка "Использовать спецсимволы"...
         */
        if (document.getElementById('sym').checked) {
            /**
             * На каждой третьей итерации вставляем спецсимвол на нужное место.
             */
            if (i % 3 == 0) { password += symbols[secnum % 6]; } 
        }
    } 
    
    /**
     * Вывод результата на экран.
     */
    document.getElementById('pass_text').innerHTML = password;
}

document.getElementById('keyword').addEventListener('keydown', (e) => {
    generate();
});