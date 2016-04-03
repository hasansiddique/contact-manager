var ContactManagerApp;
(function (ContactManagerApp) {
    var ContactController = (function () {
        function ContactController(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.user = userService.selectedUser;
        }
        ContactController.$inject = ['userService', '$mdBottomSheet'];
        return ContactController;
    })();
    ContactManagerApp.ContactController = ContactController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=contactController.js.map