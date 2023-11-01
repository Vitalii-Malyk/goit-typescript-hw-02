/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  mon = "monday",
  tue = "tuesday",
  wed = "wednesday",
  thu = "thursday",
  fri = "friday",
  sat = "saturday",
  sun = "sunday",
}

const isWeekend = (days: WeekDay): boolean => {
  return days === WeekDay.sat || days === WeekDay.sun;
};
