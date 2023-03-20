import "./RenderDeTextos.css";

export default function RenderizarTexto(textos) {
  return (
    <>
      {textos.map((texto, index) => (
        <div
          key={texto.id}
          className={`${
            index % 2 === 0 ? "AlineadoIzquierdo" : "AlineadoDerecho"
          }`}
        >
          <h2>{texto.titulo}</h2>
          <p>{texto.texto}</p>
          <p className="autor">{texto.autor}</p>
        </div>
      ))}
    </>
  );
}
