//BELOW is checking passwords match in registration - doesnt work... fix this!
//ALSO - add in a alert like success you have signed up you can now login if all fields are correctly filled.

document.getElementById(password1)
document.getElementById(password2)
document.getElementById("registerButton").addEventListener("click", checkPassword);



addEventListener("click", displayDate);


// Function to check if passwords match
//????????????????


//JavaScript for disabling form submission - reg page - if there are invalid fields - unsure how to make this work!!!!!
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()








//filtes on product page
//const nodeList = document.querySelectorAll(".buttonContainer");
//for (let i=0; i < nodeList.length; i++)
//{
//    if

//    if

//    if

//    if

//    else
//}