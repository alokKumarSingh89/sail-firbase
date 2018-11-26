var admin = require("firebase-admin");
var serviceAccount = require('../../config/firebase-config.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fir-node-b8241.firebaseio.com'
  });
  var db = admin.database();
  
  module.exports = {
    listDataFromFirebase:function(dbname, callback){
        if(!dbname){
          return callback({status:'Error',message:'Reference DB is required'},null);
        }  
        var ref = db.ref(dbname);
        ref.once("value").then(snapshot=>{
            return callback(null,snapshot.val())
        });
    },
    addDataToFirebase:function (dbname,postData,callback){
        if(!dbname){
          return callback({status:'Error',message:'Reference is required'},null)
        }else{
          var ref = db.ref(dbname);
          ref.push(postData).then(result=>{
              return callback(null,{status:'Success', message:'Succefully created'})
          })
        }
    },
    updateDataToFirebase: function(dbname,id,postData,callback){
        if(!dbname){
          return callback({status:'Error',message:'Reference DB is required'},null);
        }
        if(!id){
          return callback({status:'Error',message:'ID is required'},null);
        }
        db.ref(dbname+"/"+id).set(postData).then(result=>{
            return callback(null,{status:'Success', message:'Succefully created'})
        });

      }
  }