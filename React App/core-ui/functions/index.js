const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.getReportCount = (req, res) => {
  var collectionRef = db.collection('weeklyreport');
  var count = collectionRef.get().then((snap) => {
    console.log('size is', snap.size);
    return dataSize = snap.size;
  })
  .catch(err => {
    console.log('error is', err);
    res.status(400).send('Error');
  });
}

//not working code
