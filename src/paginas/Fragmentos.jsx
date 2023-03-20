import RenderizarTexto from "../componentes/RenderDeTextos";
import { FragmentosDB } from "../data/DummyDB";

export default function Fragmentos() {
  const fragmentosARenderizar = FragmentosDB();
  const render = RenderizarTexto(fragmentosARenderizar);
  return <div>{render}</div>;
}
