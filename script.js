document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const seat = document.getElementById("seat").value;
  const experience = document.querySelector('input[name="experience"]:checked')?.value;

  if (!experience) {
    alert("Please select whether you have attended before.");
    return;
  }

  const output = `
    Thank you, ${fname} ${lname}, for registering!<br>
    Email: ${email}<br>
    Phone: ${phone}<br>
    Seating: ${seat}<br>
    Attended Before: ${experience}
  `;

  document.getElementById("output").innerHTML = output;
});