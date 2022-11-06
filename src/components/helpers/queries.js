const URL = process.env.REACT_APP_API_RECETAS;
const URLusuarios = process.env.REACT_APP_API_USUARIOS;

export const consultarAPI = async() => {
    try{
        const respuesta = await fetch(URL);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const obtenerRecetaAPI = async(id) => {
    try{
        const respuesta = await fetch(URL+`/${id}`);
        const receta = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return receta;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const crearRecetaAPI = async(receta) => {
    try{
        const respuesta = await fetch(URL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const editarRecetaAPI = async(id, receta) => {
    try{
        const respuesta = await fetch(URL+`/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const borrarRecetaAPI = async(id) => {
    try{
        const respuesta = await fetch(URL+`/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const crearUsuarioAPI = async(usuario) => {
    try{
        const respuesta = await fetch(URLusuarios, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}