document.getElementById('searchButton').addEventListener('click', function() {
    let mainText = document.getElementById('mainText').value;
    let searchText = document.getElementById('searchText').value;
    let searchPattern = new RegExp(searchText, 'i');
    let resultMessage = searchPattern.test(mainText) 
        ? "Слово знайдено в тексті." 
        : "Слово не знайдено.";
    document.getElementById('searchMessage').textContent = resultMessage;
});


document.getElementById('checkPhone').addEventListener('click', function() {
    let phoneInput = document.getElementById('phoneInput').value;
    let phonePattern = /^\+380\d{2}-\d{3}-\d{4}$/;
    let message = phonePattern.test(phoneInput) 
        ? "Коректний номер телефону" 
        : "Некоректний номер телефону";
    document.getElementById('phoneMessage').textContent = message;
});



document.getElementById('countWordsButton').addEventListener('click', function() {
    let textInput = document.getElementById('textInput').value;
    let wordCount = textInput.trim().split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;
    document.getElementById('wordCountMessage').textContent = `Кількість слів: ${wordCount}`;
});




document.getElementById('checkPassword').addEventListener('click', function() {
    let passwordInput = document.getElementById('passwordInput').value;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!^&*?])[A-Za-z\d@#$%!^&*?]{8,}$/;
    let message = passwordPattern.test(passwordInput) 
        ? "Пароль валідний" 
        : "Пароль не відповідає вимогам";
    document.getElementById('passwordMessage').textContent = message;
});



document.getElementById('convertDatesButton').addEventListener('click', function() {
    let dateInput = document.getElementById('dateInput').value;
    let datePattern = /\b(\d{2})\/(\d{2})\/(\d{4})\b/g;
    let convertedText = dateInput.replace(datePattern, function(match, day, month, year) {
        return `${year}-${month}-${day}`;
    });
    document.getElementById('dateMessage').textContent = convertedText;
});