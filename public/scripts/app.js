console.log('Sanity Check - You should see this!!!');

angular
  .module('sadlies', [])
  .controller('SadliesController', SadliesController);

function SadliesController($http, $scope) {
  console.log('Hello from SadliesController');
  this.sadlies = []

  // $http({
  //   method: 'GET',
  //   url: '' // twitter ajax call
  // }).then(successClbk, errorClbk)
  //
  // function successClbk(response) {
  //   this.sadlies = response.data
  //   console.log(this.sadlies);
  // }
  //
  // function errorClbk(err) {
  //   console.log('There was an error retrieving your tweets ', err);
  // };

}; // controller end.
