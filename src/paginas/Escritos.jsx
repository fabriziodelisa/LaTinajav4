import RenderizarTexto from "../componentes/RenderDeTextos";
import { EscritosDB } from "../data/DummyDB";

export default function Escritos() {
  const escritosARenderizar = EscritosDB();
  const render = RenderizarTexto(escritosARenderizar);
  return <div>{render}</div>;
}
