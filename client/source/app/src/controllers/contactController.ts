/// <reference path="../_alt.ts" />

module ContactManagerApp {
    export class ContactPanelController {

        static $inject = ['userService', '$mdBottomSheet'];

        constructor(private userService:IUserService,
                    private $mdBottomSheet:angular.material.IBottomSheetService) {
            this.user = userService.selectedUser;
        }

        user:User;

        actions = [
            {name: 'Phone', icon: 'phone'},
            {name: 'Twitter', icon: 'pie_chart'},
            {name: 'Facebook', icon: 'cloud_download'},
            {name: 'Hangouts', icon: 'developer_board'}
        ];

        submitContact(contactItem):void {
            this.$mdBottomSheet.hide(contactItem);
        }
    }
}