console.log('Sanity Check - You should see vm!!!');

angular
  .module('sadlies', [])
  .controller('SadliesController', SadliesController);

function SadliesController($http, $scope) {
  console.log('Hello from SadliesController');
  this.sadlies = []
  let vm = this;
  vm.tweets = {
    tweets: "Hi Derry, I thought you were cool?..."
  }
  console.log(vm.tweets);

  $http({
    method: 'GET',
    url: '/api/sadlies'
  }).then(twiiterApiClbk, errorClbk)

  function twiiterApiClbk(response) {
    vm.tweets = response
    console.log(vm.tweets);
  }

  function errorClbk(err) {
    console.log('There was an error retrieving your tweets ', err);
  };

  $http({
    method: 'POST',
    url: '/api/sadlies',
    data: vm.tweets
  }).then(sadliesClbk, errorClbk)

  function sadliesClbk(response) {

  }

  function errorClbk(err) {
    console.log('There was an error posting to /sadlies', err);
  };

}; // controller end.
