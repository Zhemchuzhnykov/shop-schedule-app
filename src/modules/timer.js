import schedule from './data.js';

export default function() {
  
  // current time information
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const currentDayIndex = new Date().getDay();
  const currentDay = weekDays[currentDayIndex];
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const currentTime = `${currentHour}:${currentMinute}`;
  const sumOfMinutesOfCurrentTime = currentHour * 60 + currentMinute;

  // shop information
  const daysInSchedule = schedule['workingDaysSchedule'];
  let todayOpeningTime;
  
  for(let key in daysInSchedule) {
    if(currentDay === key) {
      todayOpeningTime = daysInSchedule[key]['workTime']['start'];
    }
  };

  const openingTimeHour = +(`${todayOpeningTime[0]}${todayOpeningTime[1]}`);
  const openingTimeMinute = +(`${todayOpeningTime[3]}${todayOpeningTime[4]}`);
  const sumOfMinutesOfOpeningTime = openingTimeHour * 60 + openingTimeMinute;

  // producing outcomes
  if(sumOfMinutesOfCurrentTime - sumOfMinutesOfOpeningTime > 0) {
    alert('The shop has already opened today');
    return;
  };

  const differenceInTime = sumOfMinutesOfOpeningTime - sumOfMinutesOfCurrentTime;
  const hoursLeft = parseInt(differenceInTime / 60);
  const minutesLeft = differenceInTime % 60;

  const message = `${hoursLeft} hours ${minutesLeft} minutes are left till opening`;

  alert(message);
};

/* get a current day => get a current hour and minute => get the sum of seconds => get the opening time for today =>
get the sum of seconds for the opening time => subtract the second sum from the first sum => if >0 return a message
that a shop has already been opened today => if <0 get the difference between the sums => divide the difference by
3600 and save the integer => get the rest from the division => divide this sum by 60 and save the integer => 
join two integers into a string => show the string on the screen */