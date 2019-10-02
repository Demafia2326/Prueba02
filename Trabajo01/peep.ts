
interface Persona{
    name:string,
    num:number
}

let personas: Persona[]= [];

function anadir():void{    
    
   
    let nombre:string=(<HTMLInputElement>document.getElementById('name')).value;
    let num:number=+(<HTMLInputElement>document.getElementById('num')).value;
    let contacto: Persona = {
        name: nombre,
        num: num

    }
    

    personas.push(contacto);

}

function mostrar():void{
    for(let p of personas){
        console.log(p);
    }
}

