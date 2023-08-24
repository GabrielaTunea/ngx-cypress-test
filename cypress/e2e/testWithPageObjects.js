import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutPage } from "../support/page_objects/formLayoutPage"
import { navigateTo } from "../support/page_objects/navigPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {

    // We want to create some before each hook to repeat cy.visit for us every time so we will not copy paste this thing again and again.

    beforeEach('open application', () => { // before every test, this hook will open application for us.
        cy.openHomePage()
    })
    //  first thing we want to organize is the navigation part of our app.

    it('verify navigation across the pages', () => {
        // create a page object (support => page_objects) which will be responsible for the navigation in this menu and will reuse these functions later on.
        // in the file structure of the files: fixture folder are created for the fixtures, Integration is for the test, plugins is for the plugins, and in support folder is for everything else for all code which you will need to run your tests.
        // we will keep our page objects under the support folder and inside of our page objects we will create new file and we will call it navigationPage.js.
        navigateTo.FormLayoutsPage()  //call our object.
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tootliPage()

    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.FormLayoutsPage()  //first thing we want to do is navigate to forms, page form, layouts, page.
        cy.get('.sidebar-toggle').click()
        onFormLayoutPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com') //what we want to do here is probably parameterize this method so we can use this with different parameters.
        //now we can use this method and reuse this method in a new test with a different parameters and submit different name and adresses
        onFormLayoutPage.submitInlineFormWithEmailAndPassword('test@test.com', 'password')
        //we created two methods for informs layout page.
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangefromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
        onSmartTablePage.updateAgeByFirstName('Artem','35')
        onSmartTablePage.deleteRowByIndex(1)

    })


})