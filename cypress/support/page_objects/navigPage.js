

function selectGroupMenuItem(groupName) {
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}

//I extracted this checker for if the group is collapsed or not, to a reusable function named select group menu item.
//And I assign the parameter group name which I use over here inside contains group name, and then I ust call our reusable function and provide the group name over here so I can use this function now for any group name inside of our test.
// create a new class inside of this object.

export class NavigPage {

    FormLayoutsPage() {

        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click()
    }
    datepickerPage() {
        cy.get('.sidebar-toggle').click()
        selectGroupMenuItem('Form')
        cy.contains('Datepicker').click()
    }

    toasterPage() {

        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

    smartTablePage() {
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }

    tootliPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

}


export const navigateTo = new NavigPage()

//we created five methods to navigate across different pages.
//  we used before, each hook for the first time, we put their our site dot visit to
// open our application and this code will be executed for every test in this described.
// in this test class and we created our first page object, which is navigation page object, and put there a few methods in each of the methods responsible for navigation for certain page.
// create a method which will be responsible for navigation, layout, form's layout.
// we need to add some additional logic which will verify if the menu is opened or not and if it is opened We want to click on the menu item or if it's not, we want to click on the header for this menu item.
//we created one reusable function which we are using only for these methods in this function is responsible to determine the state of the main menu.Is it opened or collapsed? So our navigation across the pages will work just fine.
// we created a very simple first test which will verify that we can successfully navigate across our pages and we are using page object pattern to do that.









//  cy.contains('Forms').click()
// cy.contains('a', 'Form').then(menu => {
//     cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
//         if (attr.includes('left')) { // means our menu is collapsed
//             cy.wrap(menu).click()
//         } //Otherwise, we just skip the if statement and we'll go straight over here.
//     })
// })
// cy.contains('Form Layouts').click()

//We created two methods, each of them responsible for navigation for each of the page.

//     cy.contains('Forms').click()

// cy.contains('a', 'Form').then(menu => {
//     cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
//         if (attr.includes('left')) { // means our menu is collapsed
//             cy.wrap(menu).click()
//         } //Otherwise, we just skip the if statement and we'll go straight over here.
//     })
// })


//So our code was able to understand if the menu collapsed or not.
 //  if it is not, then we just skip the clicking on the header of the form and select the menu item.
// will need to create a new instance of this class and assign it to the object.
// onNavigPage we created a new object of our navigation page:  FormLayoutsPage(), datepickerPage