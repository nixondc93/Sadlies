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
  // }).then(twiiterApiClbk, errorClbk)
  //
  // function twiiterApiClbk(response) {
  //   this.sadlies = response.data
  //   console.log(this.sadlies);
  // }
  //
  // function errorClbk(err) {
  //   console.log('There was an error retrieving your tweets ', err);
  // };

    // $http({
  //   method: 'POST',
  //   url: '/sadlies'
  // }).then(sadliesClbk, errorClbk)
  //
  // function sadliesClbk(response) {

  // }
  //
  // function errorClbk(err) {
  //   console.log('There was an error psoting to /sadlies', err);
  // };

}; // controller end.
