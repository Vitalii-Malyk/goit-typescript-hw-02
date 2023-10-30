/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  sat = "saturday",
  sun = "sunday",
}

const isWeekend = (days: Weekend): boolean => {
  if (days === Weekend.sat || Weekend.sun) {
    return true;
  }
  return false;
};
