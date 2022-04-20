import db from '../models/index.js'
import Repository from '../config/dbConfig.js'

export default function UserService() {

    //const User = db.user
    const dbo = new Repository()
    const dbConnect = dbo.getDb();

    return {
        join(req, res) {
            const matchDocument = {
                userid: req.body.userid,
                password: req.body.password,
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                birth: req.body.birth,
                address: req.body.address
            };
            dbConnect
                .collection("users")
                .insertOne(matchDocument, function (err, result) {
                    if (err) {
                        res
                            .status(400)
                            .send("Error inserting matches!");
                    } else {
                        console.log(`Added a new match with id ${result.insertedId}`);
                        res
                            .status(204)
                            .send();
                    }
                })
        }
    } // return
}