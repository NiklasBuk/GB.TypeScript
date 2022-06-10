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

// Практическое задание №4
// 1. Установить в проект JavaScript библиотеку с SDK нового поставщика данных о недвижимости.
// Изучить документацию к SDK и написать тайпинги для него. Доработать форму поиска и её
// обработчик для возможности работы сразу с двумя поставщиками данных или с каждым по
// отдельности по выбору пользователя.
// 2. * Реализовать бронирование выбранного места и дат. Отобразить успех или ошибку операции
// с помощью функции renderToast.
// 3. * Выбрать любую библиотеку, желательно небольшую, написать для неё тайпинги и сделать
// pull request в исходный репозиторий.
