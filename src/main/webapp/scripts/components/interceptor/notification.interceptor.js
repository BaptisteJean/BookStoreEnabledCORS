 'use strict';

angular.module('bookstoreApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-bookstoreApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-bookstoreApp-params')});
                }
                return response;
            },
        };
    });