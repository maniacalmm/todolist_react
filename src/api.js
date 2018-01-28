const APIURL = '/api/todos/';

export async function getTodos() {
    return fetch(APIURL)
            .then(res => {
                if (!res.ok) {
                    if (res.status >= 400 && res.status < 500) {
                        return res.json().then(data => {
                            throw {errorMessage: data.message};
                        })
                    } else {
                    throw {errorMessage: 'server not responding, try again'};
                    }
                }
                console.log(res);
                return res.json();
            })
}

export async function deleteTodos(id) {
    const deleteURL = APIURL + id;
    return fetch(deleteURL, {
        method: 'delete'
    })
    .then(res => {
        if (!res.ok) {
            if (res.status >= 400 && res.status < 500) {
                return res.json().then(data => {
                    throw {errorMessage: data.message};
                })
            } else {
               throw {errorMessage: 'server not responding, try again'};
            }
        }
        console.log(res.json());
    })
}

export async function createTodo(content) {
    return fetch(APIURL, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({name: content})
    })
    .then((res) => {
        if (!res.ok) {
            if (res.status >= 400 && res.status < 500) {
                return res.json().then(data => {
                    throw {errorMessage: data.message};
                })
            } else {
               throw {errorMessage: 'server not responding, try again'};
            }
        }
        return res.json();
    })
}

export async function updateTodo(id, status) {
    return fetch(APIURL + id, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({completed: !status})
        })
        .then((res) => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    return res.json().then(data => {
                        throw {errorMessage: data.message};
                    })
                } else {
                   throw {errorMessage: 'server not responding, try again'};
                }
            }
            console.log(res.json());
        })
}