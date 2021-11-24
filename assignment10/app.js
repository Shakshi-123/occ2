// Document is ready
$(document).ready(function () {
	
    // Validate Username
        $('#usercheck').hide();
        let usernameError = true;
        $('#Firstname').keyup(function () {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#Firstname').val();
        if (usernameValue.length == '') {
        $('#usercheck').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html
    ("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $('#usercheck').hide();
        }
        }
    
    // Validate Email
    $('#usercheck').hide();
    let usernameError = true;
    $('#Firstname').keyup(function () {
        validateUsername();
    });
    
    function validateUsername() {
    let usernameValue = $('#lastname').val();
    if (usernameValue.length == '') {
    $('#usercheck').show();
        usernameError = false;
        return false;
    }
    else if((usernameValue.length < 3)||
            (usernameValue.length > 10)) {
        $('#usercheck').show();
        $('#usercheck').html
("**length of username must be between 3 and 10");
        usernameError = false;
        return false;
    }
    else {
        $('#usercheck').hide();
    }
    }

    // Validate Password
        $('#passcheck').hide();
        let passwordError = true;
        $('#city').keyup(function () {
            validatePassword();
        });
        function validatePassword() {
            let passwrdValue =
                $('#city').val();
            if (passwrdValue.length == '') {
                $('#passcheck').show();
                passwordError = false;
                return false;
            }
            if ((passwrdValue.length < 3)||
                (passwrdValue.length > 10)) {
                $('#passcheck').show();
                $('#passcheck').html
    ("**length of your password must be between 3 and 10");
                $('#passcheck').css("color", "red");
                passwordError = false;
                return false;
            } else {
                $('#passcheck').hide();
            }
        }
            
    
    // Submit button
        $('#submitbtn').click(function () {
            validateUsername();
            validatePassword();
            validateConfirmPasswrd();
            validateEmail();
            if ((usernameError == true) &&
                (passwordError == true) &&
                (confirmPasswordError == true) &&
                (emailError == true)) {
                return true;
            } else {
                return false;
            }
        });
    });
    