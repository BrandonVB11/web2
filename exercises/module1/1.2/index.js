const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString())
console.log(dateTimeNow.toLocaleTimeString())

    alert(
        dateTimeNow.toLocaleDateString()+
        "\n"+dateTimeNow.toLocaleTimeString()
    );
