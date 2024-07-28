/*
* Output
* display methods
*/

// display posibilities

// 1. innerHTML
/*
* syntax:- document.getElementById("id").innerHTML = "content"
* Changing the innerHTML property of an HTML element is a common way to display data in HTML.
*/
document.getElementById("heading").innerHTML = "Hello Js!";


// 2. Using document.write()
/*
* syntax:- document.write()
! Using document.write() after an HTML document is loaded, will delete all existing HTML:
? should only be used for testing
*/
document.write("document write");

// 3. window.alert()
/*
* syntax:- window.alert() or alert()
* shows an alert box to display data
? window keyword is optional. 
* window is a object in the golobal scope
* so only alert("message") will do the same
*/
// window.alert(6*10);

// 4. console.log()
/*
* syntax:- console.log()
? used for debugging purpose
*/
console.log("Hello JavaScript!!");

// 5. print
/*
* syntax:- window.print()
? use to print the content of the current window
*/
function printDoc(){
    window.print();
}