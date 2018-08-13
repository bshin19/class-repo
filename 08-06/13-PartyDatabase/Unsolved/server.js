var orm = require("./config/orm.js");

//console.log all the client names
orm.allNames("client_name", "clients");
//console.log all the party names
orm.allNames("party_name", "parties");

orm.selectWhere("parties", "party_type", "grown-up");

orm.clientParties("client_name", "client_id", "clients", "parties");