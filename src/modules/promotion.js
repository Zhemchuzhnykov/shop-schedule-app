import { days, promotionName } from '../index.js';

export const showPromotion = (event) => {

  let dayChecked = event.target.textContent;

  if(dayChecked.length > 9 && event.target.closest('.day') !== null) {
      dayChecked = event.target.closest('.day').childNodes[0].textContent;
  };

  let promotion;
  for(let key in days) {
    if (dayChecked === key) {
      promotion = `${days[key]['promotionName']}`;
    }
  }
  
  promotionName.textContent = promotion;
};

export const hidePromotion = () => {
  promotionName.textContent = '';
};