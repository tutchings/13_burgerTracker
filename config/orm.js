// import db connection from connection.js
var connection = require("../config/connection.js");

// function to print a string of question marks
// each question mark in the string correlates to a value being entered into sql statement
function printQuestionMarks(num) {

    var array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();

} //end function printQuestionMarks(num)



// function to turn an object to a string of key value pairs
// key value pairs will be separated by "=" rather than ":"
// this creates proper syntax for ues in sql statements
function objToSql(obj) {

    var array = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if(typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            array.push(key + "=" + value);
        }
    }

    return array.toString();

} //end function objToSql(obj)


// orm object for sql statements
var orm = {
    all: function(table, cb) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
        
        connection.query(queryString, vals, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    delete: function(table, condition, cb) {
        var queryString = `DELETE FROM ${table} WHERE ${condition};`;

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

// export orm for use in model in cat.js
module.exports = orm;