const findTheOldest = function (array) {
  return array.reduce((oldest, currPerson) => {
    let currYear = new Date().getFullYear();
    let currAge = (currPerson.yearOfDeath ? currPerson.yearOfDeath : currYear) - currPerson.yearOfBirth;
    let oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath : currYear) - oldest.yearOfBirth;
    return oldestAge >= currAge ? oldest : currPerson;
  }, array[0])
};

// Do not edit below this line
module.exports = findTheOldest;
