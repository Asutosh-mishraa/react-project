
import Productdisplay from './Components/Productdisplay';
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import Info from './Components/Info';
import Navigation from './Components/Navigation';
function App(){
  return(
    <div>
      
      <Navigation />
      <Route path="/" exact component={Home}/>
      <Route path="/info" exact component={Info}/>
      <Route path="/products" exact component={Productdisplay}/>
      
      
    </div>
  );
}
export default App;
