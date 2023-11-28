function generatePassword() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyz";
    let password = "";

    for (let i = 0; i < length; i++) {
        if (special = "yes") {
            charset = charset + "!@#$%&*_-?"
        } else {continue}
        if (uppercase = "yes") {
            charset = charset +  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        } else {continue}
        if (numbers = "yes") {
            charset = charset + "0123456789"
        } else {continue}
            
        const randomIndex = Math.floor(Math.random() * charset.length); 
        password += charset.charAt(randomIndex);
    }

    document.getElementById('password').textContent = password;
}