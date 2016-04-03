/// <reference path="../_alt.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var ContactPanelController = (function () {
        function ContactPanelController(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'pie_chart' },
                { name: 'Facebook', icon: 'cloud_download' },
                { name: 'Hangouts', icon: 'developer_board' }
            ];
            this.user = userService.selectedUser;
        }
        ContactPanelController.prototype.submitContact = function (contactItem) {
            this.$mdBottomSheet.hide(contactItem);
        };
        ContactPanelController.$inject = ['userService', '$mdBottomSheet'];
        return ContactPanelController;
    }());
    ContactManagerApp.ContactPanelController = ContactPanelController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=contactController.js.map