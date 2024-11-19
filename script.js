//VARIABLES SECTION

const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const password2Input = document.querySelector('#password2')
const emailInput = document.querySelector('#email')
const popup = document.querySelector('.popup')
const clearButton = document.querySelector('.clear')
const sendButton = document.querySelector('.send')
const closePopupButton = document.querySelector('.close')




//FUNCTIONS SECTION


const showError = (input, msg) => {
	//the INPUTargument stores our inputs
	//the MSGargument stores the placeholder
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.replace(/:$/, '')} musi składać sie z min. ${min} znaków`
		)
		
	}2
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(emailInput.value)) {
		clearError(email)
	} else {
		showError(email, 'Email jest niepoprawny')
	}
}

const checkPassword = (passwordInput, password2Input) => {
	if (passwordInput.value !== password2Input.value) {
		showError(password2Input, 'Hasła do siebie nie pasują!')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}
}
//The INPUTargument from the “checkForm” function stores an array of our inputs
//the ELargument refers to each variable we put in the array


//LISTENERS SECTION


sendButton.addEventListener('click', e => {
	e.preventDefault()

	checkForm([usernameInput, passwordInput, password2Input, emailInput])
	checkLength(usernameInput, 3)
	checkLength(passwordInput, 8)
	checkPassword(passwordInput, password2Input)
	checkMail(email)
	checkErrors()
})

clearButton.addEventListener('click', e => {
	e.preventDefault()
	;[usernameInput, passwordInput, password2Input, emailInput].forEach(el => {
		el.value = ''
		clearError(el)
	})

	// usernameInput.value = ''
	// passwordInput.value = ''
	// password2Input.value = ''
	// emailInput.value = ''
})
