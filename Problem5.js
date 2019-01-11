//Create a function that’s passed a name and the number of times a user wants to print Hello [NAME].
// Print Hello [NAME] that many times in the function.

function multiHelllo(name, multiple){
    var counter = 0;

    // With a while loop
    // while (counter< multiple){
    //     console.log("hello "+ name);
    //     counter++;
    // }

    //With for loop
    for(i=0; i<multiple; i++){
        console.log("Hello "+name);
    }
}
multiHelllo("kenn", 3);