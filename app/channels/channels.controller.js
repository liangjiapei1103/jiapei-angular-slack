angular.module('angularfireSlackApp')
    .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels) {
        var channelsCtrl = this;

        channelsCtrl.profile = profile;
        channelsCtrl.channels = channels;

        channesCtrl.getDisplayName = Users.getDisplayName;
        channelsCtrl.getGravatar = Users.getGravatar;

        channelsCtrl.logout = function() {
            Auth.$unauth();
            $state.go('home');
        };

        channelsCtrl.newChannel = {
            name: ''
        };

        channelsCtrl.createChannel = function() {
            // Add newChannel into channels
            channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function() {
                // set newChannel back to empty name
                channelsCtrl.newChannel = {
                    name: ''
                };
            });
        };
    });
