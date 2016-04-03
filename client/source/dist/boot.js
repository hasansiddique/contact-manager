/// <reference path="_alt.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons', 'ngMessages'])
        .service('userService', ContactManagerApp.UserService)
        .controller('MainController', ContactManagerApp.MainController)
        .controller('NewUserController', ContactManagerApp.NewUserController)
        .controller('ContactPanelController', ContactManagerApp.ContactPanelController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .icon('menu', './content/svg-icons/ic_menu_white_24px.svg', 24)
            .icon('avatar', './content/svg-icons/person-flat.svg', 128)
            .icon('add_user', './content/svg-icons/ic_add_circle_white_48px.svg', 24)
            .icon('clear_all', './content/svg-icons/ic_clear_all_black_48px.svg', 24)
            .icon('face', './content/svg-icons/ic_tag_faces_black_48px.svg', 24)
            .icon('pie_chart', './content/svg-icons/ic_pie_chart_black_48px.svg', 48)
            .icon('cloud_download', './content/svg-icons/ic_cloud_download_black_48px.svg', 48)
            .icon('developer_board', './content/svg-icons/ic_developer_board_black_48px.svg', 48)
            .icon('phone', './content/svg-icons/ic_phone_black_48px.svg', 48);
        $mdThemingProvider.theme()
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map