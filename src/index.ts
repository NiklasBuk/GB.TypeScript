import { renderUserBlock, getUserData, getFavouritesAmount } from './user.js'
import { renderSearchFormBlock, search } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderToast } from './lib.js'



const user = {userName: 'Wade Warren', avatarUrl: './img/avatar.png'}
const favouritesAmount = 42

localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmount))

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(
    getUserData('user'), 
    +(getFavouritesAmount('favouritesAmount'))
  )
  renderSearchFormBlock()
  renderSearchStubBlock()
  search()
  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
})

// Практическое задание №3
//      1. Ознакомьтесь с API сервиса по предоставлению данных о недвижимости. Реализовать
// запрос к API на поиск недвижимости, соответствующей введённым критериям поиска.
// Заполнить интерфейс Place свойствами в соответствии с документацией API.
// Отобразить полученные результаты для пользователя.
//      2. Создать и реализовать функцию toggleFavoriteItem, которая будет вызываться при
// клике на иконку избранного в результатах поиска. Если недвижимость не была
// добавлена в избранное ранее, то функция сохранит её. Если недвижимость уже
// находится в избранном, то функция её удалит. Данные сохраняются в localStorage с
// ключом favoriteItems. Каждая запись хранит частичные данные недвижимости:
// идентификатор, название и ссылку на изображение. Не забудьте обновить логику
// функции getFavoritesAmount из прошлого урока.
//      3. * Реализовать запрос к API на бронирование выбранного места и дат. Отобразить
// успех или ошибку операции с помощью функции renderToast.
//      4. * Если пользователь выбрал даты, но не осуществил бронирование, то через 5 минут
// необходимо вывести сообщение о необходимости обновить данные поиска с
// соответствующей кнопкой. Для этого используйте функцию renderToast.
// Бронирования не должно быть доступно с устаревшими данными.
