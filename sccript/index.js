function hexToRgb(hex) {
    
    if (hex.length !== 7 && hex.length !== 4) {
      return null; 
    }
  
    
    hex = hex.startsWith('#') ? hex.slice(1) : hex;
  
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      return null; 
    }
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  const hexInput = document.getElementById('hex');
  const resultDiv = document.getElementById('result');
  
  const convertButton = document.getElementById('convert');
  convertButton.addEventListener('click', () => {
    const hexValue = hexInput.value.trim();
    const rgbValue = hexToRgb(hexValue);
  
    if (rgbValue) {
      resultDiv.textContent = rgbValue;
    } else {
      resultDiv.textContent = 'Invalid Hex Code!';
    }
  });