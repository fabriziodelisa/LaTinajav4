export default function SelectNav() {
  //const TitlesOnSelect = () => {};

  return (
    <div className="buscador">
      <select className="item-form input" name="selector" id="textos">
        <option value="" selected="selected" disabled="disabled">
          ----- Buscar texto -----{" "}
        </option>
        <option value="la-botie">La Botie</option>
        <option value="san-martin">San Martin</option>
        <option value="zhuangzi">Zhuangzi</option>
        <option value="frag-30">Fragmento 30</option>
        <option value="frag-18">Fragmento 18</option>
      </select>
      <button id="button" onClick="goTo()">
        IR
      </button>
    </div>
  );
}
