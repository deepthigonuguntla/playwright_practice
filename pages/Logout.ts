// objects/elements of login page
import {BaseClass} from '../utils/BaseClass';
export class LogOut extends BaseClass{
static button_logout ="//a[text() ='Logout']";

///methods 
static async Logout(){
await this.page.locator(this.button_logout).click();
}
}