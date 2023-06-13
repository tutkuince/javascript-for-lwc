// Event
//
// An event is an action that occurs in the web browser, which the web browser feedbacks to you so that you can respond to it.
// For example, when users click a button on a webpage, you may want to respond to this click event by displaying a alert box.

// Event handler - It is a block of code that will execute when the event occurs. It is also known as an event listener.

// Two Common ways to add events
// 1. HTML Event Handle Attribute - When we add event through HTML, Event always begin with on keyword like onclik, ochange, onkeyup
// 2. Event Listener - Event Handlers provide two main methods for dealing with the registering/deregistering event listeners:
// addEventListener() - register an event handler
// removeEventListener() - remove an event handler

// function firstFunction() {
//     console.log('hellowww');
// }

// let btn = document.querySelector('button');
// btn.addEventListener('click', firstFunction);

// document.addEventListener('mousemove', handler);
// function handler() {
//     document.querySelector('.demo').innerHTML = Math.random();
// }

// function removeHandler() {
//     document.removeEventListener('mousemove', handler);
// }

// Event Propagation
//
// Event Propagation explains the order in which events are received on the page from the element where the event occurs and propagated through the DOM tree.
// There are two main event models
// 1. Event bubbling
// In the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element (document or even window)
// 2. Event Capturing

// Custom Event
// In Javascript we can create our own custom event using Customevent constructor
// Syntax => new CustomEvent('eventName', {options})

                                        // dispatchEvent is use to trigger the event
// Example => element.dispatchEvent(new CUstomEvent('hello', { => hello is the event name
//          detail: {name: 'John'}  => detail property used to pass data 
// }))

document.addEventListener('hello', function(data) {
    console.log('hello has called and send ', data.detail);
});

function callCustomMethod() {
    let event = new CustomEvent('hello', {
        detail: {name: 'tutku'}
    });
    document.dispatchEvent(event);
}