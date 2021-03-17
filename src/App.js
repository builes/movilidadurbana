import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Acerca from './components/Acerca'
import Inicio from './components/Inicio'
import Inicio1 from './components/Inicio1'
import Curso1 from './components/Curso1'
import Blog from './components/Blog'



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route exact path='/acerca'  component={Acerca} />
        <Route exact path='/'  component={Inicio} />
        <Route exact path='/inicio1'  component={Inicio1} />
        <Route exact path='/curso1'  component={Curso1} />
        <Route exact path='/blog'  component={Blog} />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
