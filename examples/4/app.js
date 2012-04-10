
function PersonsController() {
  var that = this;

  this.persons = [
    { name: "Hans", age: 54 },
    { name: "Klaus", age: 14 },
    { name: "Gabi", age: 52 },
    { name: "Stefan", age: 52 }
  ];

  this.removePerson = function (person) {
    that.persons.splice(that.persons.indexOf(person), 1);
  }

};
