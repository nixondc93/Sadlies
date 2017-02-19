console.log('Sanity Check - You should see this!!!');

angular
  .module('sadlies', [])
  .controller('SadliesController', SadliesController);

function SadliesController($http, $scope) {
  console.log('Hello from SadliesController');
  this.sadlies = []
  this.tweets = {
    tweets: "Hi Derry, I thought you were cool?..."
  }

  $http({
    method: 'GET',
    url: '/api/sadlies'
  }).then(twiiterApiClbk, errorClbk)

  function twiiterApiClbk(response) {
  
  }

  function errorClbk(err) {
    console.log('There was an error retrieving your tweets ', err);
  };

  $http({
    method: 'POST',
    url: '/api/sadlies',
    data: this.tweets
  }).then(sadliesClbk, errorClbk)

  function sadliesClbk(response) {

  }

  function errorClbk(err) {
    console.log('There was an error posting to /sadlies', err);
  };

};
// controller end.
