// networking in Cypress.
// What tools do you have in Cyprus to work with network connection
// How can you assert network responses
// How can you mock network responses and stuff like that
// basics of the networking about what is API and how does it work and what is Json object and how to work with the Json object.


// What is API?
// API is stands for application programming interface, which is widely used in the modern world of the web applications
//Think about API as a certain black box, which can do some stuff for you, and if you know how correctly ask the questions, You can receive the answer or response from this black box with a certain result.
// Let's imagine that this box on the screen is our weather API and we send request to this API and if the request was correct, we can get response, for example, with the current weather.
// So what kind of request we can do to this API according documentation?
// Let's say we know that this weather API can return the current weather in the city.
// If we will provide the city name as a request, we will get the current weather as a response with the forecast for the next two days. So usually APIs work with the payloads in a Json format.
// So in this box, typical example of the simple Json object. And if we send the request to this API that the city name is NewYork, we will get the response from this API that the current weather, the current temperature is 70 degrees, humidity is 45 and forecast
// If we will change the city name, for example, to Chicago and send this request again, the weather
// API will return this object with exactly the same format, but just with the different options.
// So this is the basic approach how API works and the representation of the data over here in this box.
// This is a typical Json object and this is how most of the web application work in nowadays.

//Type of API request
//GET - is considered to get the request for the specific data for API.
//POST - post and put request type of request created to send data to API to create or update the resource.
//PUT
//DELETE - delete request remove specified resource based on the request information.

// For example, in the previous slide I showed you how we requested the data from the weather API to get the information about the weather forecast based on the city
// For example, you are submitting some web form or web application and send it to the server post and put request has very similar functionality and we will not go into that much details.

//typical API request consists of

/// API URL - Each API request should have API URL. So this is Https link to the API and usually is called API End-point . So this is basically web address.
// Where will you send your request?
/// Headers - Usually it's Content-Type or Authorization token
// Usually you define their content type or if it is secure API and require authorization, you will see their authorization token as well.
// Type - GET, POST, PUT, DELETE
// Body - JSON object with request data
/// Sometimes get request may not have body, it has just query string parameters, but post request always will have some body which we are requesting or sending data to the API.

// Client - Server
// Most of the modern applications are client server, so web browser is our client and certain backend server with bunch of APIs working on the server side and our browser during the interaction sends a bunch of API requests.
// You cannot even imagine how many of those our browser is sending to the certain backend APIs and endpoints every minute.
// What Cyprus can do, It can intercept some of those calls and provide the mock response to your web browser
// when you can create your own service and provide the response which you actually need for your test.
// The response from the Cyprus server comes back instantly because it's located on the same machine you are running test on and the same time you can specify which API calls you still want to go through to the real API server and which one you want to mock and the examples of the mocking we will definitely cover in this module.
// Also in Cyprus you can make actual API requests to the server without UI.
// on behalf of the browser You can send the API request, get certain response from the backend server and then use this data for something
// So what a cool thing about the Cyprus that it's not just framework for UI functional testing, it can be used also for API testing. It's kind of hybrid approach of testing if you will.

// Summary
// API - Application Programming Interface (black box) // API stands for application programming interface// It's like a black box.// You can send requests to it and get the certain response.
// Type of API requests: Get,Post,Put,Delete  //Types of request for the APIs are get post put and delete.
// Typical API request has: URL, Headers, Request type, Body
// Cyprus has built in server which can intercept browser API request and provide mock responses
// Cyprus can make API requests and process the responses.


// Json objects.
// This is very important topic to have a clear understanding how to work with Json objects, how to read the Json objects, how to interact with Json object updates and so on and so forth.
// Because Json objects are the main type for the API requests and API response.
// So to have a power and flexibility to work with the data which you are sending and you are receiving, you have to know how to work with it.
// Json objects is acronym for the JavaScript object notation.
// This is the format how the data is organized, and I will show you the few examples of the Json object structure right now.
// Simple object and objects are always in curly braces.
//Each object has key and value

// In the object, we have key and value pairs.
// In the array we have just values and each of the value in the array has a certain index and this index start with 0. The first element has index zero, then one and then two.

//  Json object always starts with the curly braces.
// Json object consists of key and value pairs.
// Key from the value is always separated by the colon in each value of the key and value pairs separated by comma.
// Array is always in the square braces and it has just the values which are separated by comma.
// You can also can have array of objects and more complex structure types of data as string and numbers.
// String is in double quotes. Number is just numbers and this example of the mix object.
// mix: You can combine your data and organize it how you want and call this data is very simple. Just call the object and through the dot call next parameter.
// When you want to access value in the array, provide the square braces and provide the index of the element in the array.