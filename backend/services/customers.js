const con = require('../sqlConnect').con;

exports.getCustomers = function(req, res){ 
    
        let isDeleted = 0;
    
        if (req.query.deleted) {
            isDeleted = 1;
        }

    con.query("SELECT * FROM `customers`  WHERE `isDeleted` = ? AND `userId` = ?",[isDeleted, req.session.user.id],  (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}



    exports.getCustomer = function(req, res) {
    con.query("SELECT * FROM `customers` WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
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

    exports.addCustomer = function(req, res) {
    con.query("INSERT INTO `customers` (`userId`,`firstName`, `lastName`, `meansOfCommunication`, `phone`, `email`, `state`, `city`, `street`, `houseNamber`, `zipCode`, `info`,`isDeleted`) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)", [req.session.user.id,req.body.firstName, req.body.lastName, req.body.meansOfCommunication , req.body.phone, req.body.email, req.body.state, req.body.city , req.body.street, req.body.houseNamber, req.body.zipCode, req.body.info], (err, result) => {
       
        if (err) {
            console.log(err);
        }else{
            console.log("working add");
            console.log(result);
        }
        res.send();
    });}


    exports.updateCustomer = function(req, res) {
    con.query("UPDATE `customers` SET `firstName` = ?, `lastName`= ?, `meansOfCommunication`= ?, `phone`= ?, `email`= ?, `state`= ?, `city`= ?, `street`= ?, `houseNamber`= ?, `zipCode`= ?, `info`= ?,`isDeleted`= 0 WHERE `id` = ?  AND `userId` = ?", [req.body.firstName, req.body.lastName, req.body.meansOfCommunication , req.body.phone, req.body.email, req.body.state, req.body.city , req.body.street, req.body.houseNamber, req.body.zipCode, req.body.info, req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }else{
            console.log("working add");
            console.log(result);
        }

        res.send();
    });}


    exports.restoreCustomer = function(req, res) {
    con.query("UPDATE `customers` SET `isDeleted` = 0 WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });}

    exports.removeCustomer = function(req, res) {
    con.query("UPDATE `customers` SET `isDeleted` = 1 WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}