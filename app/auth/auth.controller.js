angular.module('angularfireSlackApp')
    .controller('AuthCtrl', function(Auth, $state) {
        var authCtrl = this;

        authCtrl.user = {
            email: '',
            password: ''
        };

        authCtrl.login = function() {
            Auth.$authWithPassword(authCtrl.user).then(function(auth) {
                $state.go('home');
                console.log('Go to home');
            }, function(error) {
                authCtrl.error = error;
            });
        };

        authCtrl.register = function() {

            // Auth.createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password)
            //     .then(function(user) {
            //         console.log("Log In");
            //         authCtrl.login();
            //     })
            //     .catch(function(error) {
            //         console.log(error);
            //         authCtrl.error = error;
            //     });

            Auth.$createUser(authCtrl.user).then(function(user) {
                console.log("log in");
                authCtrl.login();
            }, function(error) {
                console.log(error);
                authCtrl.error = error;
            });
        };
    });
