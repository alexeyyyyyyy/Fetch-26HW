const BASE_URL = "https://webaccounting.herokuapp.com";

registration.onclick = () => {
    const user = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        login:  login.value.trim(),
        password: password.value
    }

    fetch(`${BASE_URL}/account/user`, {
        method: 'Post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Возвращаем данные в формате JSON
            } else {
                throw new Error("Error");
            }
        })
        .then(data => {
            // Обработка успешного ответа
            console.log(data); // Вывод данных в консоль
            const addMessage = addElemets('Registration was successful!!!', 'h1');
            document.body.appendChild(addMessage);
            result(addMessage);
        })
        .catch(e => {
            console.error(e);
            const elementError = addElemets(`Error: ${e.message}`, 'h1');
            document.body.appendChild(elementError);
            result(elementError);
        });
}

function result(element) {
    if (info.firstElementChild) {
        info.replaceChild(element, info.firstElementChild);
    } else {
        info.appendChild(element);
    }
}

function addElemets(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}