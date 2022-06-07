import { dailyScheduleBtn, dailySceduleDaysContainer, days } from '../index.js';

export const showDays = () => {

  dailySceduleDaysContainer.innerHTML = '';

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satruday', 'Sunday'];

  for(let element of weekDays) {
    const dayElement = document.createElement('div');
    dayElement.textContent = element;
    dayElement.classList.add('day');
    dailySceduleDaysContainer.append(dayElement);
  }
}

export const showDetails = (event) => {

  dailySceduleDaysContainer.querySelectorAll('.shift-details').forEach(day => {
    const breakEl = day.previousElementSibling;
    breakEl.remove();
    day.remove();
  });

  const clickedElement = event.target;
  if (!clickedElement.classList.contains('day')) return;

  const chosenDay = clickedElement.textContent;
  let details = '</br><span class=\'shift-details\'> It\'s a day-off </span>';

  for(let key in days) {
    if (chosenDay === key) {
      details = `</br><span class=\'shift-details\'> Start time: ${days[key]['workTime']['start']} </br> End time: 
      ${days[key]['workTime']['finish']} </br> Manager: ${days[key]['manager']}</span>`;
    }
  }

  clickedElement.innerHTML += details;
};
