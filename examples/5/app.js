
var persons = [
  { id: 1, name: "Hans", age: 54 },
  { id: 2, name: "Klaus", age: 14 },
  { id: 3, name: "Gabi", age: 52 },
  { id: 4, name: "Stefan", age: 52 }
];

function PersonsController($route) {
  var that = this;

  $route.when('/persons', {template: 'partials/person-list.html',   controller: PersonsListController});
  $route.when('/persons/:personId', {template: 'partials/person-detail.html', controller: PersonDetailController});
  $route.otherwise({redirectTo: '/persons'});

  $route.onChange(function() {
    that.params = $route.current.params;
  });

  $route.parent(this);

};


function PersonsListController() {
  var that = this;

  this.persons = persons;

  this.removePerson = function (person) {
    that.persons.splice(that.persons.indexOf(person), 1);
  }

}

function PersonDetailController() {
  this.person = persons[this.params.personId];
}