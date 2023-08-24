export class FormLayoutPage {

    submitInlineFormWithNameAndEmail(name, email) {
        cy.contains('nb-card', 'Inline form').find('form').then(form => {
            cy.wrap(form).find('[placeholder ="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder ="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            cy.wrap(form).submit() // Cypress method and you can use this method only for the form.
        })
    }
    submitInlineFormWithEmailAndPassword(email, password) {
        cy.contains('nb-card', 'Basic form').find('form').then(form => {
            cy.wrap(form).find('[placeholder ="Email"]').type(email)
            cy.wrap(form).find('[placeholder ="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            cy.wrap(form).submit() // Cypress method and you can use this method only for the form.
        })

    }
}

export const onFormLayoutPage = new FormLayoutPage




//first step we want to do here is submit inline form with the first and last name and let's create