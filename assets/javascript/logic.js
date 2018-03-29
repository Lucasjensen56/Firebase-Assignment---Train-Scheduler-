
// Initialize Firebase


  var config = {
    apiKey: "AIzaSyCG2VQ752TuXZmivM4dyFyb3r1YLRYTrAo",
    authDomain: "time-sheet-5b8b4.firebaseapp.com",
    databaseURL: "https://time-sheet-5b8b4.firebaseio.com",
    projectId: "time-sheet-5b8b4",
    storageBucket: "",
    messagingSenderId: "1080299854464"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  // values

  var trainName = "";
  var destination = "";
  var frequency = 0;
  var firstTrainTime = "";
  var minutesAway = "";







$("#addTrain").on("click", function(event) {
	event.preventDefault();
	

	   trainName = $("#trainName").val();
     destination = $("#destination").val().trim();
     frequency = $("#frequency").val().trim();
     firstTrainTime = $("#firstTrainTime").val().trim(); 

     


     // minutesAway = $("#minutesAway").val().trim(); 




	database.ref().push({
		name: name,
		destination: destination,
		frequency: frequency, 
		firstTrainTime: firstTrainTime,
    minutesAway: minutesAway,
		dateAdded: firebase.database.ServerValue.TIMESTAMP	
	});
});


database.ref().on("child_added", function(childSnapshot) {

	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().destination);
	console.log(childSnapshot.val().firstTrainTime);
  console.log(childSnapshot.val().minutesAway);
	console.log(childSnapshot.val().dateAdded);



	var childSnapshotVal = childSnapshot.val();



	  $("#tableBody").append("<tr><td> " + childSnapshotVal.name + 
	  	" </td><td class='destination'> " + childSnapshotVal.destination + 
	  	" </td><td class='frequency'> " + childSnapshotVal.frequency +
	  	" </td><td class='nextTrain'> " + childSnapshotVal.nextTrain +
      " </td><td class='minutesAway'> " + childSnapshotVal.minutesAway +
	  	" </td></tr>");





// moment JS 



 // var tFrequency = 17;

    var tFrequency = frequency;

console.log(frequency)


    // Time is 3:30 AM
    var firstTime = "03:00";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");

    console.log(firstTimeConverted);222

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));






})





database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

var sv = snapshot.val();

	  // console.log(sv.name);
   //    console.log(sv.destination);
   //    console.log(sv.frequency);
   //    console.log(sv.firstTrainTime);


$("#trainName").text(snapshot.val().name);
$("#destination").text(snapshot.val().destination)
$("#frequency").text(snapshot.val().frequency)
$("#firstTrainTime").text(snapshot.val().firstTrainTime)
$("#minutesAway").text(snapshot.val().firstTrainTime)



});










