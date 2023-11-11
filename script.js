document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");

    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyPassword);

    function generatePassword() {
        const passwordLength = document.getElementById("passwordLength").value;
        const uppercase = document.getElementById("uppercase").checked;
        const lowercase = document.getElementById("lowercase").checked;
        const numbers = document.getElementById("numbers").checked;
        const symbols = document.getElementById("symbols").checked;

        const charset = generateCharset(uppercase, lowercase, numbers, symbols);

        if (charset.length === 0) {
            alert("Please select at least one character type.");
            return;
        }

        const password = generateRandomPassword(passwordLength, charset);
        document.getElementById("password").value = password;
    }

    function copyPassword() {
        const passwordField = document.getElementById("password");
        passwordField.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    }

    function generateCharset(uppercase, lowercase, numbers, symbols) {
        let charset = "";
        if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) charset += "0123456789";
        if (symbols) charset += "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

        return charset;
    }

    function generateRandomPassword(length, charset) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }
        return password;
    }
});
