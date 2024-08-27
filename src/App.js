import Titulo from "./componenteTitulo";
import Contenido from "./componenteContenido";

function App() {
  return (
    <div>
      <Titulo/>
      <Contenido numeroMaximo='10' />
    </div>
  );
}

export default App;
