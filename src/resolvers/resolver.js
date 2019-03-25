export function allalbum (){
    return fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        
        },
        mode: 'cors',
        body: JSON.stringify({query: "{ albums{ name, to, photo } }"})
        }).then(r => r.json())
        
};
