/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var FirebaseService = require("../services/firebaseService");
module.exports = {
	index:function(req,res){
        // FirebaseService.listDataFromFirebase('test',function(error,result){
        //     res.json(result)
        // })
        FirebaseService.addDataToFirebase('test',{name:'alok'},function(result){
            res.json(result);
        })
        
    }

};

