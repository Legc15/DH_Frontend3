import "./App.css";

function Producto(props){
    return(
        <div className="Producto">
            <h2>Nombre: {props.nombre}</h2>
            <h2>Precio: {props.precio}</h2>
        </div>
    )
};

export default Producto;