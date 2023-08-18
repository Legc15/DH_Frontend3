import { useState } from "react";

function Form({onAgregarCancion}) {

        const[Cancion, setCancion] = useState("");
        const[Autor, setAutor] = useState("");
        const[Album, setAlbum] = useState("");
        const[mostrarMensaje, setMostrarMensaje] = useState(false);
        const [mensaje, setMensaje] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if (Cancion.trim().length >= 3 && Autor.trim().length >= 6 && Album.trim()!== "") {
                onAgregarCancion({Cancion, Autor, Album})
                setCancion("");
                setAutor("");
                setAlbum("");
                setMensaje("Cancion agregada correctamente")
                console.log("Cancion agregada correctamente")

            }else {
                setMensaje("tenes algun error en los campos ingresados")
                console.log("No se agrego la cancion")
            }
            setMostrarMensaje(true);

            
        };

        return (
            <form className="Form" onSubmit={handleSubmit}>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingrese aquí el nombre de la cancion" 
                    value={Cancion} onChange={(e)=> setCancion(e.target.value)}

                    />
                
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingrese nombre del Autor" 
                    value={Autor} 
                    onChange={(e)=> setAutor(e.target.value)}

                    />

                <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingrese nombre del Album" 
                    value={Album} onChange={(e)=> setAlbum(e.target.value)}

                    />
                
                <button className="Submit" type="submit"> Agregar Canción </button>

                {mostrarMensaje && ( 
                    <p className={mensaje.includes("correctamente")? "succes" : "error"}>
                        {mensaje}
                    </p>
                )}

            </form>

        )

};

export default Form;