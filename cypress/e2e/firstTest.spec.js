/// <reference types = "cypress" />

describe('Our first suit', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('.sidebar-toggle').click()

        // first locator is search element by Tag Name
        cy.get('input')

        //search element by ID
        cy.get('#inputEmail1')

        // find by Class name
        cy.get('.input-full-width')

        // find by Attribute name
        cy.get('[placeholder]')

        // find by Attribute name and value 
        cy.get('[placeholder="Email"]')

        // find by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // find by Tag Name and Attribute with value
        cy.get('input[placeholder="Email"]')

        // by two different atributes 

        cy.get('[placeholder="Email"][type="email"]')

        // by Tag Name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // The most recomended way by Cypress
        cy.get('[data-cy="imputEmail1"]')

    })

    it('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('.sidebar-toggle').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]', 'Sign in')

        cy.get('.sidebar-toggle').click()
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    })

    it('then and wrap methods', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('.sidebar-toggle').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // selenium

        // const firstForm = cy.contains('nb-card','Using the grid')
        // const secondForm = cy.contains('nb-card','Basic form')

        // firstForm.find('[for="inputEmail1"]').should('contain','Email')
        // firstForm.find('[for="inputPassword2"]').should('contain','Password')
        // secondForm.find('[for="exampleInputEmail1"]').should('contain','Email address')

        // cypress style

        cy.contains('nb-card', 'Basic form').then(secondForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for = "inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const passwordSecondText = secondForm.find('[for="exampleInputEmail1"]').text()
                expect(passwordLabelFirst).to.equal(passwordSecondText)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

            })
        })

    })

    // invoke command

    it('invoke command', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('.sidebar-toggle').click()



        // 1
        cy.get('[for="exampleInputEmail1"]')
            .should('contain', 'Email address')
            .should('have.class', 'label')
            .and('have.text', 'Email address')

        // 2
        //  we got the result of this function, saved it as input label.
        // The input labor is j query an element and then used a J query method text to get the text from this label. And then we made the assertion to the email address.
        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal('Email address')
            expect(label).to.have.class('label')
            expect(label).to.have.text('Email address')
        })

        // 3 
        //  invoke a function in an array of functions, not really descriptive.
        // the same thing, but we use Cypress Invoke Method to get the text from the page
        // We save this text as a parameter of our function and then we made the assertion that text is equal to email address 
        // invoke is useful because you can grab some text, save it into the parameter and then do something, some logic inside of that phone
        // It can be useful compared to example2  where you have to call additional text method on the previous
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            // .should('contain', 'checked')  // should method
            .then(classValue => {            //extract the result of invoke function as a parameter for then function and then be used by assertion to make the same verification.
                expect(classValue).to.contain('checked')

                //  this was the first example of using invoke function is getting the attribute values and making some assertion with this values or anything you need to do with this values.
            })

    })

    it('assert propriety', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.get('.sidebar-toggle').click()

        cy.contains('nb-card', "Common Datepicker").find('input').then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-picker').contains('15').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', "Aug 15, 2023")

        })
    })

    // we learned how we can use invoke function to get the text from the web page, 
    // how we can get different attribute values from our web elements, and work with this values and how we can invoke properties of the Web elements and work with this properties as well.

    //Checkboxes and Radio Buttons

    it('radio button', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('.sidebar-toggle').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radiobuttons => {
            cy.wrap(radiobuttons)
                .first()
                .check({ force: true })
                .should('be.checked')

            cy.wrap(radiobuttons)
                .eq(1) // find it by the index.
                .check({ force: true })

            cy.wrap(radiobuttons)
                //.first()
                .eq(0)
                .should('not.be.checked')

            cy.wrap(radiobuttons)
                .eq(2)
                .should('be.disabled')


        })
    })

    // find command will return us three web elements because we have three radio buttons and all of and all of three radio buttons has a type of radio
    // equal one or first are two commands in Cyprus:
    // first is just to get the first element. It's the same thing if it's replaced with eq(0)
    // equal is to get element with certain index. 


    it('check boxes', () => {

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()
        cy.get('.sidebar-toggle').click()

        //cy.get('[type="checkbox"]').check({ force: true })
        cy.get('[type="checkbox"]').eq(0).click({ force: true })
        //cy.get('[type="checkbox"]').eq(0).check({ force: true }) // it s not working with check
        cy.get('[type="checkbox"]').eq(1).check({ force: true })
        cy.get('[type="checkbox"]').eq(2).click({ force: true })

        // how the check method actually works: If the checkbox is already checked, the check command will not like uncheck this checkbox. It will only check this checkbox if it is unchecked.
        // You are not able to uncheck the check box with this method check
        // to uncheck this checkbox you have to use a click method.

        // check method is only to work with the elements of type, check box and radio buttons
        // Check method will work only with input elements and the type of this input element should be checkbox and radio buttons. It will not work on any other type of the elements.
        // Check method can pick and check multiple check boxes for you.
        // check method can only check your check box but cannot uncheck your check box.
        // You can also use click method to work with checkboxes and radio buttons, but I highly recommend you to use actually the check command with this type of web elements.

    })

    //Web Datepickers

    it('assert propriety', () => {

        function selectDayfromCurrent(day) { // we want to parametrized this date as a barometer for this function.

            let date = new Date(); // what this date object is doing is actually getting current system date and time in the format of the date, month, date of the week and even the time.
            // So the next step, what we want is we want to add a certain number of days to these dates.
            // getDate() method will return current day of the month. After we want to add, let's say, two days. But after we did this, we have to set this date back into the date format. So we're calling our object again.So we're calling our object again.
            date.setDate(date.getDate() + day) //we will need to know the month for our future date as well.
            let futureDay = date.getDate() // this future day variable will keep for us the day we want to select. we will use this variable over here to pick the date in the calendar.
            console.log(futureDay)
            // let futureMonth = date.gateMonth() // we need future month, because if the date we want to select is, for example, will be January but not the December, we want to know that and we will ride the condition if the date we want to select is January.But the current date is December. We want to select the next month and then pick the date.
            // gateMonth()  this method will return for you the number of the month, not exactly the string for the name of the month.
            // What we need is to return the short version of the month like DEC,Jan etc
            let futureMonth = date.toLocaleString('default', { month: 'short' }) //  using one line, we will get the month from our date and we will give the short format four our date which is Dec, Jan...
            let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()
            // what do we need to do is to create some logic. If the current month is not equal to the future month, then we want to click on THE Small Arrow so the next month will be selected.
            // write this method in order to compare the value of the future month and the current month. We need to give the value of this current date
            // cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute)
            // let's name it dateAttribute.
            // We want to create some kind of condition that if this attribute do not include the month, the future month, we want to click on the right arrow on this one to select the next month or we want to pick the date:

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => { // Then we will grab the current date attribute.

                if (!dateAttribute.includes(futureMonth)) { //  if it's not include the future month, we want to select this arrow, otherwise we want to pick the date in our calendar.
                    cy.get('[data-name="chevron-right"]').click() // If this current date attribute does not include current month, we want to click on the right Chevron
                    //  cy.get('nb-calendar-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()// and then we want to select our date.
                    selectDayfromCurrent(day) // So in JavaScript, your function can call itself and it will create a while loop, if our month does not have the future month, it will click right and then run this function again and it will run again.  If this does not include click again, if not click again or if it is the right month, just go ahead and select the right date.
                } else {
                    cy.get('nb-calendar-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click() // Otherwise, we just want to click on the date 
                }
            })

            return dateAssert // let's provide the return of this value from our function

        }

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.get('.sidebar-toggle').click()
        cy.contains('nb-card', "Common Datepicker").find('input').then(input => {
            cy.wrap(input).click() //we will click on our input element over here.
            // we will need to repeat this step of the selecting of the months, this particular step "   cy.get('[data-name="chevron-right"]').click()", until we will find the right moment.
            // wrap this code into the function
            let dateAssert = selectDayfromCurrent(300) // parametrized this function to put the number of the dates we want to put in our test and  use this function inside of the Cyprus test.
            // the last step we need to do is to add our assertions, we have to verify that after we selected our date. January or February or whatever it is, it is displayed in our input field, in this format: "Aug 15, 2023"
            //cy.get('nb-calendar-picker').contains('15').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
            cy.wrap(input).should('have.value', dateAssert)
        })

    })


    // Lists and Dropdowns

    //  what we're going to do is we will select each of this item, let's say dark and we will verify that the value of our dropdown changed to the value we selected from the dropdown and that the background of our app changed
    // more complicate: select each of these item in this list and will verify that each of these item is possible to select.
    // And we mean when we select the different items, the text inside of this box is verified and the color is verified as well.
    //  we want to go through our list and verify each of the value.
    it('lists and dropdowns', () => {

        cy.visit('/')
        //1
        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Dark').click()
        // cy.get('nav nb-select').should('contain','Dark')
        // cy.get('nb-layout-header nav').should('have.css','background-color', 'rgb(34, 43, 69)')

        //2

        // we want to get all available options // the result of this function will be four web elements.
        // next step, what we want to do, we want to iterate through this list of the element and do something with each of this element.
        // for each list item we want to do something. first of all, we want to get the text for each of the list item. our iterator will go through an option one, two, three, four and so on.
        cy.get('nav nb-select').then(dropdown => { // This is our menu and we want to save this menu as a variable drop down because we will click on this guy multiple times and we will verify that the value of this dropdown input field is changed when we select a different item.

            // So the first step would be what is to click on this dropdown to show us the list of possible options.
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each((listitem, index) => { // we want to assign this value to some variable.
                // jQuery has a special method to remove this leading and trailing spaces by using trim method.
                const itemText = listitem.text().trim() // We assign this value to a variable item text.
                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                    // then we have to pick each of this color as the key from this object, which will give us the value for each of the column.
                }
                // now from this list we will get the text and we will be trimmed. So this variable will keep only the text for our test.
                cy.wrap(listitem).click() // So we will click on the very first list item.
                cy.wrap(dropdown).should('contain', itemText) // in this line we will verify that our input field contains the text we have selected from the dropdown menu
                // the next step we want to verify our color 
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText]) // based on the item text, we will select the color from this object.
                if (index < 3) {
                    cy.wrap(dropdown).click()
                }

                //  let's replace this hardcoded value of the color with a variable.  let's create a simple Json object with list of our colors.
                // At the end of our script, we will need to click on our menu again so our loop will be able to go through again and again.
                // we will not click for the last step on our menu
                // Each method in Cyprus has the second parameter which you can pass is actually the index of our illness
                // use this index to create a condition for our last step.

                // 3  if your app has a select so you can use Cypress Select method to select each items of the menu by the option
                // If you can select not only by the text but also by the attribute value so you can actually provide.

                // Conclusion
                //  the first example, we learned that working with list and dropdowns is very similar to any other UI elements 
                // Then we have the options list and we can select any other options by clicking on this options list and then verify the text.
                // Very important thing to know that sometimes the list of available options may disappear if it's collapsed.
                // So you can work with this element only when it showed up on the page.
                // In the second example, I have showed you how to actually loop through the list of the elements using each metod
                // This each method can have up to three parameters.
                // First parameter is actually list item and you can give any name and this is our iterator for the for eachloop.
                // And we have index which you can use for any other scenarios.
                // we iterated through our list of the items, we got the text for each of them. Then we clicked on this item.
                // We verified that this item is displayed in the input field for our menu.
                // Then we verified color for the each of the item and we use the simple object to create our map of the colors
                //  at the end I have showed you how we can use the index to create conditions in our test.

            })

        })

    })
    //  Web Tables

    it('Web Tables', () => {

        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('.sidebar-toggle').click()

        //1  how to update the table existing table value and work with the row and search the table by the name and then work with this row to make any changes.
        // we want to find this guy, Larry Bird, by his first name, Larry.Also, we want to update the age from 80 to 25  and we will verify that the value in the table was updated.
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => { // find for us table row which contains text Larry that's it and because we will work in this particular row because we will click on this pencil, then we will work on update and verify the age. // save this row as our parameter able row and we will access this guy later with cy.wrap function.
            cy.wrap(tableRow).find('.nb-edit').click() // click on edit icon to activate edit mode // We want to find class value 
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25') // once we click on this pencil, we are able to change the value. // we will need to clear the previous value before typing 25  // now we will need to find Age column in our row to update this value.
            cy.wrap(tableRow).find('.nb-checkmark').click() // click on the checkmark icon 
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25') //  verify that after we click on this checkmark, Age value is updated. // here, is a  option to find this column is simply by the index of the column. Usually table will have the same number of the columns so we can use the index of the column to get Age column
            // because we don't have the unique identifiers for each of the row, we will use just index of the row to find this row and enter first and last name.
        })

        //2 add new value and verify that the value was added
        cy.get('thead').find('.nb-plus').click() // click the plus icon. // our plus icon located in the table head
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Artem') //  we want to add first name, last name.
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Bondar')
            cy.wrap(tableRow).find('.nb-checkmark').click() // click the checkmark.
        })

        // one thing we need to verify that it was added that it should be added as a first column of our table body and it should contain first name and last name.
        // We will assert the value by the columns.
        cy.get('tbody tr').first().find('td').then(tableColumns => { //  tableColumns this variable has all our columns.
            cy.wrap(tableColumns).eq(2).should('contain', 'Artem')
            cy.wrap(tableColumns).eq(3).should('contain', 'Bondar')

        })

        // 3  test of our table search function. + // Few results in this table +  // want to find the person with 200 years old and our filter returned result.
        // we want to verify that filter functionality in our table works correctly and that all results which are returned in the table body has the 20 years old as per our filter request. 
        // 1st step would be to find the locator for this input field Age 
        // 2nd step is we want to find the table rows.
        // what we want to do, we want to go through each of these table row and check the last column of the table to verify that the last column has the age 20 using each method
        // we will type 20 in our search input field and then we will iterate through each of the table row in the result to verify that it has 20.

        const age = [20, 30, 40, 200] // we want to iterate through this array and get each of this value as our test data.
        //will wrap our object. Then we want to iterate through each of these.
        cy.wrap(age).each(age => {       // First, each loop will go through each of our test values and the second each loop will verify this.

            cy.get(' thead [placeholder="Age"]').clear().type(age) // first will find thead and then will find placeholder
            cy.wait(500) //  small delay between first and second step. // wait like half a second to change our web table.
            cy.get('tbody tr').each(tableRow => { // We want to iterate through each table row and see what table row.
                if (age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found') // We want to verify that  no data found is displayed.
                } else { // when our age is 200, we expect that table should have text no data on. Otherwise we expect that our table will return the result with the request.
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age) // Inside of this table row find Column and the column index would be number six.
                }

            })

            // we type 20, then you waited half a second.Then our table was updated. Then we got five results and then we iterated through each of the row and we verified that each of the row has result 20.

            // Conclusion 
            // all the index start with zero.
            // each web table usually starts with the table tag.
            // When you open the table tag, it's usually has table body.
            // each table body has table rows and each table row has table column.
            //The problem usually in selenium when you work with the web tables is because the table columns are the child elements for the table rows. 
            //And if you want to find some value in the table column, you usually have to find the your parent table after that and then search another column with the result you want to work with.
            // method contains is very, very useful when you work with the tables because you can find a certain table row
            // by the values in this table and then you can work with this table row to interact with different columns or any other web elements.
            // Also, you can access columns or the rows by just the index of this column.
            // also you can iterate through the rows or through the columns to assert the value or get needed values.
        })

    })

    // web elements such as tooltips, dialog boxes, pop ups and stuff

    //tooltip = When you hover over the mouse, you see the small message is show shows up on the top of the button
    // automate to verify what's the text inside of this tooltip
    it('tooltip', () => {

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()
        cy.get('.sidebar-toggle').click()
        cy.contains('nb-card', 'Colored Tooltips')
        cy.contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })

    //dialog - boxes

    it('dialog-box', () => {

        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('.sidebar-toggle').click()

        // 1 - not good to use this method  
        // find the delete icon for the first row in our table and just click on

        // cy.get('tbody tr').first().find('.nb-trash').click()
        // cy.on('window: confirm', (confirm) => {          // we have to get access to this window alert or window confirm message and then do something with this.
        //     expect(confirm).to.equal('Are you sure you want to delete?')

        // The problem is that this code will not fail. If we didn't have any confirm message. This method will work only when the cy.on detected the event was fired(declansat) with the name window confirmed.
        // But if the event did not fire, this code will never be executed.
        // That's why you will not catch if the window was not actually there.

        //2 another workaround (solutie de rezolvare). It's a little bit more complicated but will give you the result you expect.
        //create a new constant called stub. we created a new object of our stub.

        // const stub = cy.stub() // stub method It's like for creating the stubs and mocks for your function. 
        // cy.on('window: confirm', stub) //  we want to call our confirm and we want to assign when the event was fired.We want the result of this event to be assigned to our stub 
        // cy.get('tbody tr').first().find('.nb-trash').click().then( () => { // After click we expect that when we take our stub function and get call zero, we expect it to be called with our assertion message.
        //     expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        // })

        // the benefit of this kind of approach: If the window did not show up, this stub will be empty, so it will be just empty object of our window confirm event.
        // So when we will try to make a getCall for this object, we will not have any message that it will be called with.  This kind of approach is cleaner and will give you the right assertion.

        //3 you want Cypress not automatically confirm, we want to select cancel on this dialog box.
        // cy.get('tbody tr').first().find('.nb-trash').click()
        // cy.on('window: confirm', () => false) //We have to return false for our winner confirm event. when I click our mark is not deleted from the table.

        // Conclusion 
        // hen you want to automate web elements like tooltips, which require hover over mouse over this element, most likely just regular click event will work for this kind of elements.
        // therwise you can trigger mouse over event, but only in case if your application was programmed to use this event.
        // you can find the elements for assertion using the Cypress runner and inspect element in the Cypress runner because it's kind of freeze the state of the application for you.
        //The second kind of elements is the dialog boxes which related to the window of the browser.
        // we learned how to make the right assertion for this kind of web elements and how to select cancel for this type of dialog boxes.

    })


})

