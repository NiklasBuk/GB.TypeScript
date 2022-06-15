import { renderBlock } from './lib.js'
import { SearchFormData } from './search-form-data'



function searchHandler(entity: SearchFormData): void {
  console.log(`Дата заезда: ${entity.checkInValue}\nДата выезда: ${entity.checkOutValue}\nПредельная стоимость: ${entity.maxPrice}`)
}

export function search() {
  const form = document.querySelector('#form') as HTMLFormElement

  form.onsubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    const data: SearchFormData = {
      checkInValue: formData.get('checkin').toString(),
      checkOutValue: formData.get('checkout').toString(),
      maxPrice: +formData.get('price').toString().replace(/\s/g, ''),
    }
    searchHandler(data)
  }
}

function getDefaultCheckInDate() {
  const now = new Date()
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  )
}

function getDefaultCheckOutDate() {
  return new Date(
    getDefaultCheckInDate().getFullYear(), 
    getDefaultCheckInDate().getMonth(), 
    getDefaultCheckInDate().getDate() + 2)
}

const defaultInDate = getDefaultCheckInDate().toLocaleDateString('en-ca')
const defaultOutDate = getDefaultCheckOutDate().toLocaleDateString('en-ca')

export function renderSearchFormBlock (
  checkIn: string = defaultInDate, 
  checkOut: string = defaultOutDate
) {

  const minInDate = new Date().toLocaleDateString('en-ca')
  const maxCalDay = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0).toLocaleDateString('en-ca')

  renderBlock(
    'search-form-block',
    `
    <form id="form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label>
              <input type="checkbox" name="provider" value="homy" checked /> Homy
            </label>
            <label>
              <input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent
            </label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input 
              id="check-in-date" 
              type="date" 
              value="${checkIn}" 
              min="${minInDate}" 
              max="${maxCalDay}" 
              name="checkin" 
            />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input 
              id="check-out-date" 
              type="date" 
              value="${checkOut}" 
              min="${checkOut}" 
              max="${maxCalDay}" 
              name="checkout" 
            />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div>
              <button type="submit">Найти</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
