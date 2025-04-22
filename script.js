const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypt(plainText, shiftAmount) {
    let cipherText = "";
    for (let letter of plainText) {
        if (!alphabet.includes(letter)) {
            cipherText += letter;
            continue;
        }
        let shiftedIndex = alphabet.indexOf(letter) + shiftAmount;
        shiftedIndex = shiftedIndex % alphabet.length;
        if (shiftedIndex < 0) shiftedIndex += alphabet.length; // Ensure positive index
        cipherText += alphabet[shiftedIndex];
    }
    return cipherText;
}

function decrypt(plainText, shiftAmount) {
    let outputText = "";
    for (let letter of plainText) {
        if (!alphabet.includes(letter)) {
            outputText += letter;
            continue;
        }
        let shiftedIndex = alphabet.indexOf(letter) - shiftAmount;
        shiftedIndex = shiftedIndex % alphabet.length;
        if (shiftedIndex < 0) shiftedIndex += alphabet.length; // Ensure positive index
        outputText += alphabet[shiftedIndex];
    }
    return outputText;
}

function processCipher() {
    const direction = document.getElementById("direction").value;
    const text = document.getElementById("message").value.toLowerCase().trim();
    const shift = parseInt(document.getElementById("shift").value);

    if (!text) {
        document.getElementById("output-text").innerText = "Please enter a message.";
        return;
    }

    if (isNaN(shift)) {
        document.getElementById("output-text").innerText = "Please enter a valid shift number.";
        return;
    }

    let result = "";

    if (direction === "encode") {
        result = encrypt(text, shift);
    } else if (direction === "decode") {
        result = decrypt(text, shift);
    }

    document.getElementById("output-text").innerText = `The result is: ${result}`;
}
