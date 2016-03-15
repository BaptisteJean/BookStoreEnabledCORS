'use strict';

angular.module('bookstoreApp')
    .factory('Author', function ($resource, DateUtils) {
        return $resource('api/authors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.birthDay = DateUtils.convertLocaleDateFromServer(data.birthDay);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.birthDay = DateUtils.convertLocaleDateToServer(data.birthDay);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.birthDay = DateUtils.convertLocaleDateToServer(data.birthDay);
                    return angular.toJson(data);
                }
            }
        });
    });
