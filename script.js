document.getElementById("registrationForm").addEventListener("submit", function(event){
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let college = document.getElementById("college").value.trim();
  let eventSelected = document.getElementById("eventSelected").value.trim();

  let message = "";
  // Simple Validation
  if(name.length<3){
    message = "Name must be at least 3 characters.";
  } else if (!email.includes("@")){
    message = "Enter a valid email.";
  } else if (college.length<2){
    message = "College name must be valid.";
  } else if (eventSelected === ""){
    message = "Please select an event.";
  } else {
    message = "✅ Registration successful! Thank you for registering.";
    document.getElementById("registrationForm").reset();
  }

  document.getElementById("FormMessage").reset();
});
