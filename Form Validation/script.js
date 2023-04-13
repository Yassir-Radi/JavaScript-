const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	validation();
});

function validation() {
	const usernameValue = username.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const password2Value = password2.value;
	let allInputsValid = true;

	if (usernameValue === ""){
		AfficherAlert(username, "Username should not be empty");
		allInputsValid = false;
	} else if(usernameValue.length < 3){
		AfficherAlert(username, 'The username should contains at least 3 characters')
		allInputsValid = false;
	} else {
		AfficherSucces(username);
	}

	if (emailValue === "") { 
		AfficherAlert(email, "Email should not be empty");
		allInputsValid = false;
	} else if(!emailValue.match(/^[a-zA-Z0-9\.\-\_]+@[a-zA-Z0-9\-\_]+\.[a-z]{2,}$/)) {
		AfficherAlert(email, "Email not correct");
		allInputsValid = false;
	} else {
		AfficherSucces(email);
	}

	if (passwordValue === ""){
		AfficherAlert(password, "Password should not be empty");
		allInputsValid = false;
	} else if (!passwordValue.match(/^[a-zA-Z0-9]{6,}$/)){
		AfficherAlert(password, "Password too short. Minimum 6 characters");
		allInputsValid = false;
	} else { 
		AfficherSucces(password);
	}

	if (password2Value === ""){
		AfficherAlert(password2, "Password should not be empty");
		allInputsValid = false;
	} else if (passwordValue !== password2Value){
		AfficherAlert(password2, "the words are not similar ");
		allInputsValid = false;
	} else { 
		AfficherSucces(password2);
	}

	// if all inputs are valid, allow form submission
	if (allInputsValid) {
		form.submit();
	} else {
		form.removeEventListener("submit", function (e) {
			e.preventDefault();
			validation();
		});
	}
}

function AfficherAlert(input, message) {
	input.parentElement.classList.add("error");
	input.parentElement.classList.remove("success");
	input.nextElementSibling.textContent = message;
}

function AfficherSucces(input) {
	input.parentElement.classList.add("success");
	input.parentElement.classList.remove("error");
}
