import './App.css';

import ListaTareas from './componentes/ListasTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
     <div className="titulo">
        <h1>Administrador de tareas</h1>
     </div>
     <div className="contenedor">
      <h2>Mis tareas</h2>
        <ListaTareas/>
     </div>
    </div>
  );
}

export default App;
