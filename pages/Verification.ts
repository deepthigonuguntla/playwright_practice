//verification methods related to whole application
import {BaseClass} from '../utils/BaseClass';
import {expect} from '@playwright/test'

export class Verification extends BaseClass{
    
static async VerifypageTitle(title : string)
{
await expect(this.page).toHaveTitle("SureshIT");
}
}
