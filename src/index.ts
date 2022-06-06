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
