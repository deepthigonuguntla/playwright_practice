import { Page } from '@playwright/test';

export class BaseClass{
static page : Page;
static url : string = "https://sureshitacademy.in/hrms/login.php";

static async openApplication(){

    await this.page.goto(this.url);
    //console.log("application opened successfully");

}
}
