import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './componentes/nav/nav';
import NavbarBootstrap from './componentes/nav/navbar/navbar';
import ItemList from './componentes/itemList/itemList';


function App() {
  return (
   <body>
      <header>
        <NavbarBootstrap/>
      </header>    
      <main>
        <ItemList/>      
      </main>  
   </body>
  )
}

export default App;
