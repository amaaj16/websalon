export class cliente {
        constructor(metodo){
            this.headers={
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            this.metodo = metodo;
            this.mode = 'cors';
            
        }
     

     send(body){
       return this.enviar(body);

    }

    enviar(body){
       return fetch('http://localhost:4000/graphql', {
        method:this.metodo,
        headers:this.headers,
        mode:this.mode,
        body: body,
        }).then(r => r.json())
    }

}
