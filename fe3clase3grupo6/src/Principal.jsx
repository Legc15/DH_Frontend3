import "./App.css";
import Producto from "./Producto.jsx";

function Principal(){
    return(
        <div className="Principal">
            <Producto nombre= "Arroz" precio="10" />
            <Producto nombre= "Harina" precio="20" />
            <Producto nombre= "Agua" precio="30" />
        </div>
    )
};

export default Principal;