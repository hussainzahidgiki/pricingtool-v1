var mysql = require('../server')
var db = mysql.db

exports.getall = (req, res) => {
    db.query("SELECT * FROM edfenergy WHERE Region=? AND METER=? AND Contractlength=? AND CommissionUpliftpKWH=?", [req.query.Region, req.query.Meter, req.query.Contractlength, req.query.CommissionUpliftpKWH], (err, result, fields) => {
        if (!err) {
            res.send(JSON.stringify(result));
        }

        else
            console.log(err);
    })
}