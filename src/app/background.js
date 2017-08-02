angular.
    module('myApp', []).
    directive('my-background-image', function () {
        return function (scope, element, attrs) {
            element.css({
                'background-image': 'url(' + attrs.myBackgroundImage + ')',
                    'background-repeat': 'no-repeat',
            });
        };
    });