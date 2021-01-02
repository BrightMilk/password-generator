# Генератор паролей

Страница, которая генерирует пароли для любого сайта.
На входе необходимо дать ей адрес сайта, а на выходе она даст уникальный пароль.
Безопасность будет достигаться за счет секретного слова и особого алгоритма шифрования.
Также есть возможность вспомнить пароль пароль от любого сайта, если известно секретное слово и адрес сайта.

## Как устроен алгоритм

Берется адрес сайта и шифруется с помощью алгоритма MD5. Результатом шифрования является пароль.

Особый алгоритм шифрует текст таким образом, что по итоговому зашифрованному тексту невозможно восстановить исходный. Непонятна ни длина исходного текста, ни его содержимое.

> У алгоритма есть слабое место: 
> если зашифровать им один и тот же текст, получится один и тот же результат. 
> То есть алгоритм работает предсказуемо: если зашифровать адрес mail.yandex.ru 
> с помощью алгоритма MD5, всегда получится B81D1C770FD8F323B57CC73ED7B2546E. 
> Это небезопасно.

Для соблюдения уникальности пароля к адресу сайта добавляется секретное слово, которое вводит пользователь. Также дополнительное секретное слово (или фраза) прописывается в код программы. Такое решение обеспечивает безопасность пароля.

Далее адрес сайта склеивается с двумя секретными словами и все это шифруется алгоритмом MD5.

На выходе получаем уникальный трудночитаемый пароль, который никто никогда не подберет перебором.