import { con } from "../sqlConnect";

export function getContacts(req, res) {
    
        let isDeleted = 0;
    
        if (req.query.deleted) {
            isDeleted = 1;
        }

    con.query("SELECT * FROM `contacts`  WHERE `isDeleted` = ?",[isDeleted],  (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });

}


    export function getContact(req, res){ 
    con.query("SELECT * FROM `contacts` WHERE `id` = ?", [req.params.id], (err, result) => {
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


    export function addContact(req, res) {
    con.query("INSERT INTO `contacts` (`firstName`, `lastName`,`age`, `meansOfCommunication`, `phone`, `email`, `state`, `city`, `street`, `houseNamber`, `zipCode`, `info`,`isDeleted`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, 0)", [req.body.firstName, req.body.lastName, req.body.age, req.body.meansOfCommunication , req.body.phone, req.body.email, req.body.state, req.body.city , req.body.street, req.body.houseNamber, req.body.zipCode, req.body.info], (err, result) => {
       
        if (err) {
            console.log(err);
        }else{
            console.log("working add");
            console.log(result);
        }
        res.send();
    });}


    export function  updateContact(req, res) {
    con.query("UPDATE `contacts` SET `firstName` = ?, `lastName`= ?,`age` = ?, `meansOfCommunication`= ?, `phone`= ?, `email`= ?, `state`= ?, `city`= ?, `street`= ?, `houseNamber`= ?, `zipCode`= ?, `info`= ?,`isDeleted`= 0 WHERE `id` = ?", [req.body.firstName, req.body.lastName,req.body.age, req.body.meansOfCommunication , req.body.phone, req.body.email, req.body.state, req.body.city , req.body.street, req.body.houseNamber, req.body.zipCode, req.body.info, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }else{
            console.log("working add");
            console.log(result);
        }

        res.send();
    });}

    export function  restoreContact(req, res) {
    con.query("UPDATE `contacts` SET `isDeleted` = 0 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });}


    export function removeContact(req, res) {
    con.query("UPDATE `contacts` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });}
