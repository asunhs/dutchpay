'use strict';

angular.module('dutchpayApp').factory('UserModel', function () {
    return {
        user : {
            id : '',
            nick : ''
        },
        set : function (obj) {
            this.user.id = obj.id || '';
            this.user.nick = obj.nick || '';
        }
    };
});
