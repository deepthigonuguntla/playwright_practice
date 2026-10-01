import { BaseClass } from "../utils/BaseClass";
import { LoginPage } from "../pages/LoginPage";
import { LogOut } from "../pages/Logout";
import { Verification } from "../pages/Verification";
import {test} from '@playwright/test'
import { CommonFun } from "../utils/CommonFun";

test('TC001_login_logout' , async ({page}) => {

    BaseClass.page = page;

    await CommonFun.openApplication("https://sureshitacademy.in/hrms/index.php");
     await CommonFun.waitstm;
    await LoginPage.login("sureshit" , "sureshit");
    await CommonFun.waitstm;
    await Verification.VerifypageTitle("SureshIT");
     await CommonFun.waitstm;
    await LogOut.Logout();
    

})