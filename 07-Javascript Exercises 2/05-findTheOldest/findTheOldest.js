let findTheOldest = function (people) {
	let oldestPerson = {};
	let oldestAge = 0;

	people.forEach(function (person) {
		if (person.yearOfDeath == undefined) {
			if (new Date().getFullYear() - person.yearOfBirth > oldestAge) {
				oldestPerson = person;
				oldestAge = new Date().getFullYear() - person.yearOfBirth;
			}
		} else {
			if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
				oldestPerson = person;
				oldestAge = person.yearOfDeath - person.yearOfBirth;
			}
		}
	});
	return oldestPerson;
};

module.exports = findTheOldest;
