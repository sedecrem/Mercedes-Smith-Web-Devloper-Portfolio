

  
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  const formData = new FormData(event.target);

  // Send the form data using an AJAX request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "submit-form.php");
  xhr.send(formData);

  // Handle the server response
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Show a success message to the user
        alert("Form submitted successfully!");
      } else {
        // Show an error message to the user
        alert("Error submitting form. Please try again later.");
      }
    }
  };
});
