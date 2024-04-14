const BASE_URL = 'https://webaccounting.herokuapp.com';

updatePassword.onclick = e => {
    if (newPassword.value !== repeat.value) {
        alert('Password not match');
        return
    }

    const token = `Basic ${btoa(`${login.value.trim()}:${password.value.trim()}`)}`
    fetch(`${BASE_URL}/account/user/password`, {
        method: 'Put',
        headers: {
            Authorization: token,
            "X-Password": newPassword.value,
        }
    })
        .then(response => {
           if(response.ok){
               const addMessage = addElemets('Password Change was successful!!!', 'h1');
               document.body.appendChild(addMessage);
               result(addMessage);
           }else {
               throw new Error('');
           }
        })
        .then(data => console.log(data))
        .catch(e => {
            console.error(e);
            const elementError = addElemets(`Error: ${e.message}Network`, 'h1');
            document.body.appendChild(elementError);
            result(elementError);
        });
}

function result (element) {
    if(info.firstElementChild) {
        info.replaceChild(element,info.firstElementChild)
    }else {
        info.appendChild(element);
    }
}
function addElemets (content,tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element
}