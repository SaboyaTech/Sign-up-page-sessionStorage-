// Capture Button Click
$("#add-user").on("click", function (event) {
  event.preventDefault();

  // Capture User Inputs and store them into variables
  var username = $('#name-input').val();
  var email = $('#email-input').val();
  var age = $('#age-input').val();
  var reference = $('#comment-input').val();

  // Console log each of the user inputs to confirm we are receiving them correctly
  console.log({
    username: username,
    email: email,
    age: age,
    reference: reference,
  });

  sessionStorage.setItem("name", username);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("age", age);
  sessionStorage.setItem("reference", reference);

  // Output all of the new information into the relevant HTML sections
  $('#name-display').text(username);
  $('#email-display').text(email);
  $('#age-display').text(age);
  $('#comment-display').text(reference);
});

if (sessionStorage.getItem('name') !== null) {
  $('#name-display').text(sessionStorage.getItem('name'));
  $('#email-display').text(sessionStorage.getItem('email'));
  $('#age-display').text(sessionStorage.getItem('age'));
  $('#comment-display').text(sessionStorage.getItem('reference'));
}