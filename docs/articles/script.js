let password = ''; 

function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!#$?%&';

    let chars = lowercaseChars;

    if (includeUppercase) {
        chars += uppercaseChars;
    }

    if (includeNumbers) {
        chars += numberChars;
    }

    if (includeSpecialChars) {
        chars += specialChars;
    }

    password = ''; 
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    document.getElementById('generatedPassword').value = password;
}

const copyButton = document.querySelector('#copyButton');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Unable to copy to clipboard', err);
        });
});
