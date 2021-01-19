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
     * Сохраняем текстовые значения в переменные
     */
    site   = document.getElementById('site_url').value;
    salt   = document.getElementById('keyword').value;
    secNum = document.getElementById('secnumber').value;

    /* Введенное число не должно быть меньше 1 */
    if (secNum < 1) secNum = 1;

    text = site + salt + 'Medyanik Artem amedyanik.dev@gmail.com';

    /**
     * Создаем пароль на основе функции, подключенной в заголовке документа.
     */
    sourcePass = md5(text);

    /**
     * Обнуляем переменную, в которой будет храниться измененный пароль
     */
    password = '';

    /**
     * Вывод результата на экран.
     */
    document.getElementById('pass_text').innerHTML = password;
}

document.getElementById('keyword').addEventListener('keydown', (e) => {
    generate();
});