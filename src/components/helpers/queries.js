const URL = process.env.REACT_APP_API_RECETAS;

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