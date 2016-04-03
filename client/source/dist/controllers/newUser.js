/// <reference path="../_alt.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var NewUserController = (function () {
        function NewUserController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = [
                'avatar', 'avatar1', 'avatar2', 'avatar3'
            ];
        }
        NewUserController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        NewUserController.prototype.save = function () {
            this.$mdDialog.hide(this.user);
        };
        NewUserController.$inject = ['$mdDialog'];
        return NewUserController;
    }());
    ContactManagerApp.NewUserController = NewUserController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=newUser.js.map