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
 * 
 */
var symbols = '%:*#@%&';

/**
 * Функция создания пароля с полседующим его выводом на экран.
 */
function generate() {
    /**
     * Сохраняем текстовые значения в переменные
     */
    site = document.getElementById('site_url').value;
    salt = document.getElementById('keyword').value;
    text = site + salt + 'Medyanik Artem amedyanik.dev@gmail.com';

    /**
     * Создаем пароль на основе функции, подключенной в заголовке документа.
     */
    password = md5(text);

    /**
     * Вывод результата на экран.
     */
    document.getElementById('pass_text').innerHTML = password;
}