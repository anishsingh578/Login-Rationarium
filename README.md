# Login-Rationarium
Checking login Functionality
<!-- # Login-Rationarium
Checking login Functionality
const{test,except} = require("@playwright/test")
test("valid login",async function({page})){
await page.goto("app.Rationarium.com/login")
await page.getbyplaceholder("Username").type(anishsingh578@gmail.com), {delay:200}
await page.locator("input[name='password']").type("anish123")
await page.locator("//button[@type='signin']").click()
await except(page).toHaveURL(/dashboard/);
await page.getbyAlttext("profile picture").first().click()
await page.getBytext("Logout").click()
await except(page).toHaveURL(/login/)
} -->
