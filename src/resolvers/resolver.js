export class cliente {
        constructor(metodo){
            this.headers={
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            this.metodo = metodo;
            this.mode = 'cors';
            
        }
     

    enviar(body){
       return fetch('https://us-central1-backend-90c8e.cloudfunctions.net/api/graphql', {
        method:this.metodo,
        headers:this.headers,
        mode:this.mode,
        body: body,
        }).then(r => r.json())
    }

    query(Objeto){
        var graphQL= JSON.stringify({query:Objeto});
        return graphQL;

    }
    ql(tag,...datos){
        console.log(`consola:${tag}`);
        let cadena = tag ,
        separador= " ",
        sinespacios =cadena.split(separador);
        var graphQL= JSON.stringify({query:cadena});
        return graphQL;
    }
    mutation(){

    }

    sunscrition(){

    }

}
