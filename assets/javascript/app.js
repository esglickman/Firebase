console.log("hi");
var config = {
    apiKey: "AIzaSyBNwhwe9Mcx9z-1l1eu7-ltnZNLmue8XB0",
    authDomain: "train-project-b9bf6.firebaseapp.com",
    databaseURL: "https://train-project-b9bf6.firebaseio.com",
    projectId: "train-project-b9bf6",
    storageBucket: "",
    messagingSenderId: "316768602088"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var destination = "";
  var trainTime = 0;
  var frequency = "";

$("#buttonPush").on("click", function(event) {
  alert("hi");
	event.preventDefault();

	name = $("#nameInput").val().trim();
	destination = $("#destinationInput").val().trim();
	trainTime = $("#firstTrainInput").val().trim();
	frequency = $("#frequencyInput").val().trim();

	database.ref().push({
		name : name,
		destination : destination,
		trainTime : trainTime,
		frequency : frequency,
	//	dateAdded: firebase.database.ServerValue.TIMESTAMP
	})

	console.log("name");


})

database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
  
      console.log(childSnapshot.val().name);


      // full list of items to the well
      $("#employeeTable").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
        " </span><span id='role'> " + childSnapshot.val().destination +
        " </span><span id='monthly'> " + childSnapshot.val().trainTime +
        " </span><span id='startTime'> " + childSnapshot.val().frequency + " </span></div>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      // Change the HTML to reflect
      $("#trainDisplay").html(snapshot.val().name);
      $("#email-display").html(snapshot.val().role);
      $("#age-display").html(snapshot.val().monthlyRate);
      $("#comment-display").html(snapshot.val().startDate);
    });

    var randomDate = "02/23/1999";
    var randomFormat = "MM/DD/YYYY";
    var convertedDate = moment(randomDate, randomFormat);

    console.log(moment(convertedDate).format("MM/DD/YY"));
    console.log(moment(convertedDate).format("MMM Do, YYYY hh:mm:ss"));
    console.log(moment(convertedDate).format("X"));
    console.log("----------------------------------------");

