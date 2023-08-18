function Canciones({canciones}){
    return(
        <div>
            <h2> Listado de canciones </h2>
            {canciones.map((cancion, index) => (
                <div key={index} className="card">
                    <h3>{cancion.Cancion} {cancion.Autor} {cancion.Album}</h3>   
                </div>
            ))}

        </div>
    )

}

export default Canciones;