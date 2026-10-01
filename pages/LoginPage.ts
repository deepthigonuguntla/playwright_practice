//objects/elements and methods related to login page
import {BaseClass} from '../utils/BaseClass'

export class LoginPage extends BaseClass{

   // elements
    static textbox_loginname = "//input[@name='txtUserName']";
    static textbox_pwd = "//input[@name='txtPassword']";
    static button_login = "//input[@type ='Submit']";

   //methods
static async login(UN : string , PWD : string){

await this.page.locator(this.textbox_loginname).fill(UN);
await this.page.locator(this.textbox_pwd).fill(PWD);
await this.page.locator(this.button_login).click();

}

}