import { renderBlock } from './lib.js'



export function getUserData(user): unknown {
  const userObj = JSON.parse(localStorage.getItem(user))
  const userProps: object = {userName: 'unset user-name', avatarUrl: 'unset avatar'}

  if (
    typeof userObj.userName === 'string' 
    && typeof userObj.avatarUrl === 'string'
  ) {
    return userObj
  }
  return userProps
}

export function getFavouritesAmount(favouritesAmount): unknown {
  return localStorage.getItem(favouritesAmount)
}

export function renderUserBlock (userData, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
  
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userData.avatarUrl}" alt="Wade Warren" />
      <div class="info">
        <p class="name">${userData.userName}</p>
        <p class="fav">
        <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
      </p>
      </div>
    </div>
    `
  )
}
