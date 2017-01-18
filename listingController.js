angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
        code: $scope.formcode,
        name: $scope.formname,
        coordinates: {
          latitude: $scope.formlatitude,
          longitude: $scope.formlongitude
        },
        address: $scope.formaddress
    })

      $scope.formcode = "";
      $scope.formname = "";
      $scope.formlatitude = "";
      $scope.formlongitude = "";
      $scope.formaddress = "";
    };

    $scope.deleteListing = function(index) {
      var position = $scope.listings.indexOf(index);
      $scope.listings.splice(position, 1)
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
    };
  }
]);
