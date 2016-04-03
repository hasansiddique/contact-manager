/// <reference path="../_alt.ts" />

module ContactManagerApp {
    export class MainController {

        static $inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'
        ];

        constructor(private userService:IUserService,
                    private $mdSidenav:angular.material.ISidenavService,
                    private $mdToast:angular.material.IToastService,
                    private $mdDialog:angular.material.IDialogService,
                    private $mdMedia:angular.material.IMedia,
                    private $mdBottomSheet:angular.material.IBottomSheetService) {
            var mainVm = this;

            this.userService
                .loadAllUsers()
                .then((users:User[]) => {
                    mainVm.users = users;
                    mainVm.selectedUser = users[0];
                    mainVm.userService.selectedUser = mainVm.selectedUser;
                    console.log(mainVm.users);
                });
        }

        searchText:string = '';
        tabIndex:number = 0
        users:User[] = [];
        selectedUser:User = null;
        newNote:Note;
        formScope:any;

        toggleNavBar():void {
            this.$mdSidenav('left').toggle();
        }

        selectUser(user:User):void {
            this.selectedUser = user;
            this.userService.selectedUser = user;
            var sideNav = this.$mdSidenav('left');
            if (sideNav.isOpen()) {
                sideNav.close();
            }
            this.tabIndex = 0;
        }

        removeCard(note:Note):void {
            var noteIndex = this.selectedUser.notes.indexOf(note);
            this.selectedUser.notes.splice(noteIndex, 1);
            this.openToast("Note " + note.title + " is removed successfully!");
        }

        clearAllNotes($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you Sure?')
                .textContent('All notes for selected user will be deleted!')
                .targetEvent($event)
                .ok('Delete')
                .cancel('Cancel');

            var mainVm = this;
            this.$mdDialog.show(confirm).then(() => {
                mainVm.selectedUser.notes = [];
                mainVm.openToast('All Notes Cleared Successfully!');
            });
        }

        addNewUser($event) {
            var mainVm = this;
            var fullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

            this.$mdDialog.show({
                templateUrl: '../../../dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: NewUserController,
                controllerAs: 'newUserVm',
                clickOutsideToClose: true,
                fullscreen: fullScreen
            }).then((user:CreateUser) => {
                var newUser:User = User.fromCreate(user);
                mainVm.users.push(newUser);
                mainVm.selectedUser = newUser;
                mainVm.openToast(user.firstName + ' ' + user.lastName + ' has been added successfully!');
            }, () => {
                console.log('You closed the dialog box!');
            });
        }

        showContactOptions($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: '../../../dist/views/contactSheet.html',
                controller: ContactPanelController,
                controllerAs: 'cpVm',
                bindToController: true,
                targetEvent: $event
            }).then((clickedItem) => {
                clickedItem && console.log(clickedItem.name + ' is clicked');
            })
        }

        setFormScope(scope) {
            this.formScope = scope;
        }

        addUserNote() {
            this.selectedUser.notes.push(this.newNote);

            // -- reset form after submission
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();

            this.newNote = Note('', null);
            this.openToast('Note has been added!');
        }

        openToast(message:string):void {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            );
        }

    }
}