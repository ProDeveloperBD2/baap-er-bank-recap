document.getElementById('btn-login').addEventListener('click', function () {
    // First Name //
    const firstName = document.getElementById('f-name');
    const firstNameValue = firstName.value;
    firstName.value = '';

    // Last Name //
    const lastName = document.getElementById('l-name');
    const lastNameValue = lastName.value;
    lastName.value = '';

    // First Name //
    const userEmail = document.getElementById('user-email');
    const userEmailValue = userEmail.value;
    userEmail.value = '';

    // First Name //
    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;
    userPassword.value = '';


    if (firstNameValue === 'Nahid' && lastNameValue === 'Hasan' && userEmailValue === 'mdnahid@gmail.com' && userPasswordValue === 'nAhid123') {
        window.location.href = 'banks.html'
    }
    else {
        alert('Your UserName & Password Wrong !!')
    }
})