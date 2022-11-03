import { test, expect} from '@playwright/test';


test('Validate googleSearchFields', async ({ page }) => {
    
    // 1.Go to Google.com
    await page.goto('https://www.yahoo.com/');

    // 2.Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Yahoo/);

    // 3.Find and Click on Search Field
    let field : any = {};
    field =  page.locator('#ybar-sbq').click;

    // 4.In search field put Crypto
    await field.fill('Crypto');
    
    // 5.Click on magnifier glass
    let glass : any = {};
    glass = page.locator('#ybar-search').click;

    // 5. Assertion
    // Here I need help
    //await expect(page).toContain('/.*cols');
    

   await page.waitForTimeout(5000);
});





