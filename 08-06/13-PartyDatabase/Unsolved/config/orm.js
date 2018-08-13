var connection = require("./connection.js");

var orm = {
    //   * Console log all the party/client names.
    allNames: function(property, table) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [property, table], function(err, result) {
          if (err) throw err;
          console.log(result);
          console.log("======================================================");
        });
    },

    //   * Console log all the parties that have a party-type of grown-up.
    selectWhere: function(table, colName, colVal) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, colName, colVal], function(err, result) {
          if (err) throw err;
          console.log(result);
          console.log("=======================================================");
        });
      },

    //   * Console log all the clients and their parties.
    clientParties: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
          "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    
        connection.query(
          queryString,
          [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
          function(err, result) {
            if (err) throw err;
            console.log(result);
          }
        );
      }
    
};
module.exports = orm;