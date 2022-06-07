import storeSchedule from './modules/data.js';
import { showPromotion, hidePromotion } from './modules/promotion.js';
import { showDays, showDetails } from './modules/schedule.js';
import isOffDay from './modules/openness-checker.js';
import showTimeTillOpening from './modules/timer.js';

export const days = storeSchedule['workingDaysSchedule'];
export const promotionName = document.querySelector('.promotion-name');
export const dailyScheduleBtn = document.querySelector('.daily-schedule-btn');
export const dailySceduleDaysContainer = document.querySelector('.daily-schedule__days');
export const opensInBtn = document.querySelector('.opens-in-btn');

dailyScheduleBtn.addEventListener('click', showDays);
dailySceduleDaysContainer.addEventListener('click', showDetails);
dailySceduleDaysContainer.addEventListener('mouseover', showPromotion);
dailySceduleDaysContainer.addEventListener('mouseleave', hidePromotion);
opensInBtn.addEventListener('click', showTimeTillOpening)

isOffDay('dskfw');
isOffDay('Sunday');
isOffDay('sunday');