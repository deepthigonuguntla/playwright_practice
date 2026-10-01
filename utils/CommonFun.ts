import {BaseClass} from './BaseClass'

export class CommonFun extends BaseClass{
    static async openApplication(url : string){

        await this.page.goto(url);

    }
    static async waitstm(){

        this.page.waitForTimeout(30000);
        
    }
}