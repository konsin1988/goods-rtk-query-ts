import { FetchCount } from './components/FetchCount'
import classes  from './App.module.css'
import ProductList from './components/ProductList'
import { InputField } from './components/InputField'

function App() {

  return (
    <div className={classes.App}>
        <FetchCount/>   
        <InputField/>   
        <ProductList />
    </div>
  );
}

export default App;
