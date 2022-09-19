const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString())
console.log(dateTimeNow.toLocaleTimeString())

const thisMessage = "This is the best moment to have a look at this website !";

function addDateTime (message){
    var dateTime = dateTimeNow.toLocaleDateString()+
    "\n"+dateTimeNow.toLocaleTimeString()+"\n";
    return dateTime+message
};


    alert(addDateTime(thisMessage));