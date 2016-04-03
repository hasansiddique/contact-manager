/// <reference path="../_alt.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.searchText = '';
            this.tabIndex = 0;
            this.users = [];
            this.selectedUser = null;
            var mainVm = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                mainVm.users = users;
                mainVm.selectedUser = users[0];
                mainVm.userService.selectedUser = mainVm.selectedUser;
                console.log(mainVm.users);
            });
        }
        MainController.prototype.toggleNavBar = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selectedUser = user;
            this.userService.selectedUser = user;
            var sideNav = this.$mdSidenav('left');
            if (sideNav.isOpen()) {
                sideNav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.removeCard = function (note) {
            var noteIndex = this.selectedUser.notes.indexOf(note);
            this.selectedUser.notes.splice(noteIndex, 1);
            this.openToast("Note " + note.title + " is removed successfully!");
        };
        MainController.prototype.clearAllNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you Sure?')
                .textContent('All notes for selected user will be deleted!')
                .targetEvent($event)
                .ok('Delete')
                .cancel('Cancel');
            var mainVm = this;
            this.$mdDialog.show(confirm).then(function () {
                mainVm.selectedUser.notes = [];
                mainVm.openToast('All Notes Cleared Successfully!');
            });
        };
        MainController.prototype.addNewUser = function ($event) {
            var mainVm = this;
            var fullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: '../../../dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: ContactManagerApp.NewUserController,
                controllerAs: 'newUserVm',
                clickOutsideToClose: true,
                fullscreen: fullScreen
            }).then(function (user) {
                var newUser = ContactManagerApp.User.fromCreate(user);
                mainVm.users.push(newUser);
                mainVm.selectedUser = newUser;
                mainVm.openToast(user.firstName + ' ' + user.lastName + ' has been added successfully!');
            }, function () {
                console.log('You closed the dialog box!');
            });
        };
        MainController.prototype.showContactOptions = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: '../../../dist/views/contactSheet.html',
                controller: ContactManagerApp.ContactPanelController,
                controllerAs: 'cpVm',
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && console.log(clickedItem.name + ' is clicked');
            });
        };
        MainController.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        MainController.prototype.addUserNote = function () {
            this.selectedUser.notes.push(this.newNote);
            // -- reset form after submission
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();
            this.newNote = ContactManagerApp.Note('', null);
            this.openToast('Note has been added!');
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        MainController.$inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'
        ];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=main.js.map