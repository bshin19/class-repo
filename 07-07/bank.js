var fs = require('fs');

var command = process.argv[2];
var amount = process.argv[3];

function findTotal(displayTot) {
    var total = 0
    fs.readFile("bank.txt", 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        };

        var dataSplit = data.split(", ")
        for (var i = 0; i < dataSplit.length; i++) {
            total += parseFloat(dataSplit[i]);
        };

        if (displayTot) {
            console.log("Your new balance is $" + total + ".");
        };
    });
    return total;
};

switch (command) {
    case "deposit":
        fs.appendFile("bank.txt", ", " + amount, function (err, data) {
            if (err) {
                console.log(err);
            };
            total = findTotal(true);
        });
        break;

    case "total":
        total = findTotal(true);
        break;

    case "withdraw":
        total = findTotal(false)
        console.log(total);
        if (total < amount) {
            console.log("You do not have enough money for this withdrawal!");
            total = findTotal(true);
        } else {
            fs.appendFile("bank.txt", ", -" + amount, function (err, data) {
                if (err) {
                    console.log(err);
                };
                total = findTotal(true);
            });
        };
        break;

    case "lotto":
        total = findTotal(false);
        if (total < amount) {
            console.log("You do not have enough money to gamble!");
            total = findTotal(true);
        } else {
            fs.appendFile("bank.txt", ", -" + amount, function (err, data) {
                if (err) {
                    console.log(err);
                };
                var randNumber = Math.floor((Math.random() * 100));
                if (randNumber == amount) {
                    var lottoWin = Math.floor((Math.random() * 100));
                    lottoWin = lottoWin * randNumber
                    console.log("You've won the lotto! Your winnings are " + lottoWin + "!");
                    total = findTotal(true);
                    fs.appendFile("bank.txt", ", " + lottoWin, function (err, data) {
                        if (err) {
                            console.log(err);
                        };
                    });
                } else {
                    console.log("You didn't win. Better luck next time!");
                    total = findTotal(true);
                };
            });
        };
        break;
};