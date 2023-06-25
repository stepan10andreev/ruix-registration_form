# Форма регистрации пользователей с отправкой данных

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width='30'/>

## Описание

Форма состоит из 3 __полей ввода__: `name`, `email`, `password` и 1 `чекбокса` ('Remember Me')

Реализована валидация полей ввода по следующим параметрам:
1) все поля обязательны для заполнения
2) корректный формат ввода Email
3) валидация пароля: не менее `6 символов`, хотя бы 1 спецсимвол (`!@#$%^&*`), хотя бы `1 цифру`, и хотя бы `1 букву` в `верхнем` и `нижнем` регистре

При некорректных данных по нажатию на кнопку `Register` под полями ввода появляются соотвествующие `сообщения ошибок`. Далее ошибки исчезают при введение пользователем символов в поле ввода и если поле ввода стало корреткным. 

При успешной отправки появляется модальное окно с сообщением `Данные успешно отправлены`. Выход из модального окна по клику вне его.
При возникновении ошибки при отправке данных появляется `текст ошибки` под кнопкой `Register`

## Установка

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm run dev
```

### Запуск сервера с фейковым REST API
В корневом репозитории есть папка `Fake API_json-server`, содержащая фейковый REST API - созданный с помощью `json-server`. Для запуска необходимо перейти в данную папку и выполните команду:
```sh
json-server --watch db.json
```

Сервер для разработки (в корневом репозитории - команда `npm run dev`) запуститься по адресу http://localhost:3000.

Сервер с фейковым REST API запуститься по адресу http://localhost:5000.


## Технологии
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-scss.ru/)
- [axios](https://axios-http.com/ru/)
- [react-hook-form](https://react-hook-form.com/)

