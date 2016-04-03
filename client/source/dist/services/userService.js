/// <reference path="../_alt.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Hasan Siddique',
                    avatar: 'svg-1',
                    bio: 'askjdhkajjdhaksjdhkah dkjasdhkjas hdkjas hdkjaskdhas djas hdhaskdha',
                    notes: [
                        {
                            title: 'Notes 1', date: new Date('01/04/2016')
                        },
                        {
                            title: 'Notes 2', date: new Date('01/06/2016')
                        }
                    ]
                },
                {
                    name: 'Kyle Simpson',
                    avatar: 'svg-1',
                    bio: 'askjdhkajjdhaksjdhkah dkjasdhkjas hdkjas hdkjaskdhas djas hdhaskdha',
                    notes: [
                        {
                            title: 'Notes 1', date: new Date('01/04/2016')
                        },
                        {
                            title: 'Notes 2', date: new Date('01/06/2016')
                        }
                    ]
                },
                {
                    name: 'Alex Riley',
                    avatar: 'svg-1',
                    bio: 'askjdhkajjdhaksjdhkah dkjasdhkjas hdkjas hdkjaskdhas djas hdhaskdha',
                    notes: [
                        {
                            title: 'Notes 1', date: new Date('01/04/2016')
                        },
                        {
                            title: 'Notes 2', date: new Date('01/06/2016')
                        }
                    ]
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    }());
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map