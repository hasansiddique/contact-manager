/// <reference path="../_alt.ts" />

module ContactManagerApp {
    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User
    }

    export class UserService implements IUserService {
        static $inject = ['$q'];

        constructor(private $q:ng.IQService) {

        }

        selectedUser:User = null;

        loadAllUsers():ng.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users:User[] = [
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

        ]
    }

}