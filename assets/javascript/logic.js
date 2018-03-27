
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

  var name = "";
  var role = "";
  var age = 0;
  var startDate = "";
  var monthlyRate = "";







$("#addEmployee").on("click", function(event) {
	event.preventDefault();
	console.log("you added a employe")

	 name = $("#EmployeeName").val().trim();
     role = $("#Role").val().trim();
     startDate = $("#startDate").val().trim();
     monthlyRate = $("#monthlyRate").val().trim(); 



	database.ref().push({
		name: name,
		role: role,
		startDate: startDate, 
		monthlyRate: monthlyRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP	
	});
});


database.ref().on("child_added", function(childSnapshot) {

	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().role);
	console.log(childSnapshot.val().monthlyRate);
	console.log(childSnapshot.val().dateAdded);



	var childSnapshotVal = childSnapshot.val();



	  $("#tableBody").append("<tr><td> " + childSnapshotVal.name + 
	  	" </td><td class='role'> " + childSnapshotVal.role + 
	  	" </td><td class='startDate'> " + childSnapshotVal.startDate +
	  	" </td><td class='monthlyRate'> " + childSnapshotVal.monthlyRate +
	  	" </td></tr>");






})





database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

var sv = snapshot.val();

	  // console.log(sv.name);
   //    console.log(sv.role);
   //    console.log(sv.startDate);
   //    console.log(sv.monthlyRate);


$("#EmployeeName").text(snapshot.val().name);
$("#Role").text(snapshot.val().Role)
$("#startDate").text(snapshot.val().startDate)
$("#monthlyRate").text(snapshot.val().monthlyRate)



});







