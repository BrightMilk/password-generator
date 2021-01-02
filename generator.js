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
 * Функция создания пароля с полседующим его выводом на экран.
 */
function generate() {
    /**
     * Сохраняем текстовые значения в переменные
     */
    site = document.getElementById('site_url').value;
    salt = document.getElementById('keyword').value;
    text = site + salt + 'sample text';

    /**
     * Создаем пароль на основе функции, подключенной в заголовке документа.
     */
    password = md5(text);

    /**
     * Вывод результата на экран.
     */
    document.getElementById('pass_text').innerHTML = password;
}