function Event(){
    
    function miEvento(){
        console.log("Hola")
    }
    return(
        <div>
            <p>Click para lanzar un evento</p>
            <button onClick={miEvento}> Activar </button>
        </div>
    )
}

export default Event;