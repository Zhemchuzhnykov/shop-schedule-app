import storeSchedule from './data.js';

export default function (checkedDay) {

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const offDays = storeSchedule['holidays'];

  const isDayFound = weekdays.findIndex(day => day.toLowerCase() === checkedDay.toLowerCase());
  
  if(isDayFound === -1) {
    console.log('Check the spelling of the data input');
    return;
  };

  const isOffDay = offDays.findIndex(day => day.toLowerCase() === checkedDay.toLowerCase());

  if (isOffDay === -1) {
    console.log('The shop works today');
    return;
  }
  
  console.log('The shop is closed today');
};