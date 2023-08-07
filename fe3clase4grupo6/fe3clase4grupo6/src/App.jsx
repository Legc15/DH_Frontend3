import styles from "./App.module.css";

const productos = [
  {
    nombre: "Macbook Air 13 Chip M1 256gb",
    imagen: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    precio: "R$ 7999.00",
  },
  {
    nombre: "Echo Dot (4ª Geração)",
    imagen: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    precio: "R$ 379.00",
  },
  {
    nombre: "Câmera Ip Sem Fio 360°",
    imagen: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    precio: "R$ 199.00",
  },
  {
    nombre: "Fechadura Eletrônica Digital Inteligente Zigbee",
    imagen: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    precio: "R$ 1599.00",
  },
];

export default function App() {
  return (
    <div className={styles.body}>
      <h1 className={styles.tituloh1}>Productos</h1>
      <ul className={styles.listaproducto}>
        {productos.map((item) =>(
        <li className={styles.producto} key={item.nombre}>
          <h2>{item.nombre}</h2>
          <img className={styles.imagen} src={item.imagen} />
          <h3>{item.precio}</h3>
        </li>
      ))}
      </ul>
    </div>
  );
}