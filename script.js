// Seleccionar elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const validationMessage = document.getElementById('validationMessage');

// Función para encriptar texto
function encryptText(text) {
   return text.replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
}

// Función para descifrar texto
function decryptText(text) {
   return text.replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
}

// Validación del texto
function validateText(text) {
   const regex = /^[a-z\s]+$/;
   if (!regex.test(text)) {
      validationMessage.textContent = 'Solo se aceptan letras minúsculas y espacios.';
      return false;
   }
   validationMessage.textContent = '';
   return true;
}

// Eventos para botones
encryptBtn.addEventListener('click', () => {
   const text = inputText.value;
   if (validateText(text)) {
      outputText.value = encryptText(text);
   }
});

decryptBtn.addEventListener('click', () => {
   const text = inputText.value;
   if (validateText(text)) {
      outputText.value = decryptText(text);
   }
});

// Función para copiar texto
copyBtn.addEventListener('click', () => {
   outputText.select();
   document.execCommand('copy');
   alert('Texto copiado al portapapeles');
});
