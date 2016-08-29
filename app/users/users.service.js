angular.module('angularfireSlackApp')
    .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl) {
        var userRef = new Firebase(FirebaseUrl + 'users');
        var users = $firebaseArray(usersRef);

        var Users = {};

        return Users;

    });
