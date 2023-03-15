import "./RenderDeTextos.css";

export default function RenderizarTexto(datos) {
  const { textos } = datos;
  return (
    <div>
      {textos.map((texto, index) => (
        <div
          key={texto.id}
          className={`${
            index % 2 === 0 ? "AlineadoIzquierdo" : "AlineadoDerecho"
          }`}
        >
          <h2>{texto.titulo}</h2>
          <p>{texto.texto}</p>
          <p>Autor: {texto.autor}</p>
        </div>
      ))}
    </div>
  );
}
