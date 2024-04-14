const BASE_URL = "https://webaccounting.herokuapp.com";

update.onclick = e => {
    const token = `Basic ${btoa(`${login.value.trim()}:${password.value}`)}`
    const body = {
        firstName: newfirstName.value.trim(),
        lastName: newlastName.value.trim()

    }
    fetch(`${BASE_URL}/account/user`,{
        method: 'Put',
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const addMessage = addElemets('Change was successful!!!', 'h1');
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