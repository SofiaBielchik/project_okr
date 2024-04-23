// Функція порівняння 2х рядків
function compareAndShowLargerString(string1, string2) {
    if (string1.length > string2.length) {
        alert(string1);
    } else if (string2.length > string1.length) {
        alert(string2);
    } else {
        alert("Рядки однакові за довжиною");
    }
}

compareAndShowLargerString("Сонце", "Хмари");
compareAndShowLargerString("Яблуко", "Груша");

//Умовне розгалуження
let number = 1;

if (number >= 2) {
    console.log("Ви умничка!");
} else {
    console.log("Треба ще почитати!");
}

//Цикл
let i = 0;
while (i < 5) {
    console.log(i);  
    i++;
}


// Функція, яка змінює текст опису проєкту гетелемент
function updateProjectDescription(newDescription) {
    let descriptionElement = document.getElementById("projectDescription").querySelector("dd");
    descriptionElement.textContent = newDescription;
}

updateProjectDescription("Новий опис, який робить читання ще більш привабливим і доступним для всіх.");

//inner
function updateContactInfo() {
    let contactDiv = document.getElementById("contactInfo");
    contactDiv.innerHTML = '<p>Привіт! Тепер зв\'язатися з нами можна новим способом: зателефонувавши на номер +380998877665 </p>';
}
