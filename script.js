const emailList = [];

function showSuccessState(email) {
        const msgContainer = document.getElementById('success-msg');
        const emailMsg = document.createElement('p');
        emailMsg.innerHTML = `A confirmation email has been sent to <b>${email.toString()}</b>. Please open it and click the button inside to confirm your subscription.`;
        msgContainer.appendChild(emailMsg);
        document.getElementById('success-state').classList.remove('hidden');
        document.getElementById('success-state').classList.add('visible');
        document.getElementById('modal').classList.remove('visible');
        document.getElementById('modal').classList.add('hidden');
}

function addEmail(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    emailList.push(email);
    console.log(email);
    showSuccessState(email);
}

function hideSuccessState(event) {
    event.preventDefault();
    document.getElementById('success-state').classList.remove('visible');
    document.getElementById('success-state').classList.add('hidden');
}