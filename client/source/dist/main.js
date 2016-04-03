/// <reference path="../_alt.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService) {
            this.userService = userService;
            this.users = [];
            this.message = 'Hello, Sir';
            var mainVm = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                mainVm.users = users;
                console.log(mainVm.users);
            });
        }
        MainController.$inject = ['userService'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=main.js.map