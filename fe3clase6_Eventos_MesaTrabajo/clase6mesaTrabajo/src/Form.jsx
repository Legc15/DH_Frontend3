import { useState } from "react";

function Form (){

    const[nombre, setNombre]= useState("")
    const[edad, setEdad]= useState("") 
    const[PokemonFavorito, setPokemonFavorito]= useState("")

    function handlerNombre(e){
        setNombre(e.target.value)
    }

    function handlerEdad(e){
        setEdad(e.target.value)
    }

    function handlerPokemon(e){
        setPokemonFavorito(e.target.value)
    }

    function registrar(e){
        e.preventDefault()
        console.log("Pokemon registrado")

    }

    return(
        <div>
            <h2>Mi Pkemón Favorito</h2>

            <form onSubmit={registrar}>
                <div>
                    <input type="text" placeholder="Nombre completo" onChange={handlerNombre} />
                    <input type="submit" value="registrar" />
                </div>

                <div>
                    <input type="text" placeholder="Edad" onChange={handlerEdad} />
                    <input type="submit" value="registrar" />
                </div>

                <div>
                <input type="text" placeholder="Pokemon Favorito" onChange={handlerPokemon} />
                    <input type="submit" value="registrar" />
                </div>
            </form>
            
        </div>
    )
    
}

export default Form;
