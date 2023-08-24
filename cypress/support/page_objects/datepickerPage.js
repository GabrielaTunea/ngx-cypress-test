
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
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click() // Otherwise, we just want to click on the date 
        }
    })

    return dateAssert // let's provide the return of this value from our function

}

export class DatepickerPage {

    selectCommonDatepickerDateFromToday(dayFromToday) {

        cy.get('.sidebar-toggle').click()
        cy.contains('nb-card', "Common Datepicker").find('input').then(input => {
            cy.wrap(input).click()
            let dateAssert = selectDayfromCurrent(dayFromToday)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
            cy.wrap(input).should('have.value', dateAssert)
        })
    }
    
    
    //create another method which will be responsible for this second calendar with the date range.
    // And we want to assert that we can select the range of the dates and the value should be here.

    selectDatepickerWithRangefromToday(firstDay, secondDay){

        cy.contains('nb-card', "Datepicker With Range").find('input').then(input => {
            cy.wrap(input).click()
            let dateAssertFirst = selectDayfromCurrent(firstDay)
            let dateAssertSecond = selectDayfromCurrent(secondDay)
            const finalDate = dateAssertFirst + ' - ' + dateAssertSecond
            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
            cy.wrap(input).should('have.value', finalDate)
        })
    }
}

export const onDatepickerPage = new DatepickerPage()

//On the Datepicker page, we want to select the date for the common date picker.