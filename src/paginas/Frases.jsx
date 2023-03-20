import RenderizarTexto from "../componentes/RenderDeTextos";
import { FrasesDB } from "../data/DummyDB";

export default function Frases() {
  const frasesARenderizar = FrasesDB();
  const render = RenderizarTexto(frasesARenderizar);
  return <div>{render}</div>;
}
