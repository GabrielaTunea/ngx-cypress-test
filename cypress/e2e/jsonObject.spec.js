/// <reference types = "cypress" />

describe('JSON objects', () => {

    it('JSON objects', () => {

        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2" } // format for the key value pairs. // When you call this key, you are getting the value.

        const simpleArrayOfValues = ["one", "two", "three"]

        const ArrayOfObjects = [{ "key1": "value1" }, { "key2": "value2" }, { "key3": "value3" }] //we have array and we have array of objects and each object has key and value pairs.

        const typesofData = { "string": "this is a string", "number": 10 }

        const mix = {
            "FirstName": "Artem",
            "LastName": "Bondar",
            "Age": "35",
            "Students": [
                {
                    "fisrtName": "Sara",
                    "lastName": "Conor"

                },
                {
                    "fisrtName": "Bruce",
                    "lastName": "Willis"

                },

            ]

        }
// this is how you can access values into the Json object.

        console.log(simpleObject.key2) //get the same value
        console.log(simpleObject["key2"]) //get the value knowing the key
        console.log(simpleArrayOfValues[1])   //get data from the array // result will be array number two.
        console.log(ArrayOfObjects[2].key3) //get the second object from the array of our objects and get the key for the second object so we can get the value from the second object.
        console.log(mix.Students[0].fisrtName) //find all my students // get  first student in the list/ get the first name.

        const lastNameoftheSecondStudent = mix.Students[1].lastName //get the value of the Willis and then you can do with this value whatever you want.
    })
})