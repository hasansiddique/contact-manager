/// <reference path="../_alt.ts" />

module ContactManagerApp {
    export class NewUserController {

        static $inject = ['$mdDialog'];

        constructor(private $mdDialog:angular.material.IDialogService) {
        }

        user:CreateUser;

        avatars = [
            'avatar', 'avatar1', 'avatar2', 'avatar3'
        ];

        cancel():void {
            this.$mdDialog.cancel();
        }

        save():void {
            this.$mdDialog.hide(this.user);
        }
    }
}