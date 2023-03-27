const con = require('../sqlConnect').con;

exports.getContacts = function(req, res) {
    
        let isDeleted = 0;
    
        if (req.query.deleted) {
            isDeleted = 1;
        }

    con.query("SELECT * FROM `contacts`  WHERE `isDeleted` = ? AND `userId` = ?",[isDeleted, req.session.user.id],  (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });

}


    exports.getContact = function(req, res){ 
    con.query("SELECT * FROM `contacts` WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}


    exports.addContact = function(req, res) {
    con.query("INSERT INTO `contacts` (`userId`,`firstName`, `lastName`,`age`, `meansOfCommunication`, `phone`, `email`, `state`, `city`, `street`, `houseNamber`, `zipCode`, `info`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)", [req.session.user.id, req.body.firstName, req.body.lastName, req.body.age, req.body.meansOfCommunication , req.body.phone, req.body.email, req.body.state, req.body.city , req.body.street, req.body.houseNamber, req.body.zipCode, req.body.info], (err, result) => {
       
        if (err) {
            console.log(err);
        }else{
            console.log("working add");
            console.log(result);
        }
        res.send();
    });}


    exports.updateContact = function(req, res) {
    con.query("UPDATE `contacts` SET `firstName` = ?, `lastName`= ?,`age` = ?, `meansOfCommunication`= ?, `phone`= ?, `email`= ?, `state`= ?, `city`= ?, `street`= ?, `houseNamber`= ?, `zipCode`= ?, `info`= ?,`isDeleted`= 0 WHERE `id` = ? AND `userId` = ?", [req.body.firstName, req.body.lastName,req.body.age, req.body.meansOfCommunication , req.body.phone, req.body.email, req.body.state, req.body.city , req.body.street, req.body.houseNamber, req.body.zipCode, req.body.info, req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }else{
            console.log("working add");
            console.log(result);
        }

        res.send();
    });}

    exports.restoreContact = function(req, res) {
    con.query("UPDATE `contacts` SET `isDeleted` = 0 WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });}


    exports.removeContact = function(req, res) {
    con.query("UPDATE `contacts` SET `isDeleted` = 1 WHERE `id` = ? AND `userId` = ?", [req.params.id ,req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });}
