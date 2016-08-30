angular.module('angularfireSlackApp')
    .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels, Users) {
        var channelsCtrl = this;

        channelsCtrl.users = Users.all;

        channelsCtrl.profile = profile;
        channelsCtrl.channels = channels;

        channelsCtrl.getDisplayName = Users.getDisplayName;
        channelsCtrl.getGravatar = Users.getGravatar;

        Users.setOnline(profile.$id);

        channelsCtrl.logout = function() {
            channelsCtrl.profile.online = null;
            channelsCtrl.profile.$save().then(function() {
                Auth.$unauth();
                $state.go('home');
            });
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

        channelsCtrl.createChannel = function() {
            channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref) {
                $state.go('channels.messages', {channelId: ref.key()});
            });
        };
    });
