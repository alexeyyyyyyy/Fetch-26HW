const BASE_URL = "https://webaccounting.herokuapp.com";

signIn.onclick = e => {
    const token = `Basic ${btoa(`${login.value.trim()}:${password.value}`)}`
    fetch(`${BASE_URL}/account/login`, {
        method:'Post',
        headers: {
            Authorization:token
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Invalid credentials");
            }
        })
        .then(data => {
            console.log(data);
            const addMessage = addElemets('Congrats, Welcome!!!', 'h1');
            document.body.appendChild(addMessage);
            result(addMessage);
        })
        .catch(error => {
            const elementError = addElemets(`Error: ${error.message}`, 'h1');
            document.body.appendChild(elementError);
            result(elementError);
        });
};

function result(element) {
    const info = document.getElementById('info');
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
