import './App.css';
import Card from './components/layout'

import HelloSpring from './components/reacts-spring/HelloSpring'
import NumberSpring from './components/reacts-spring/NumberSpring';

function App() {
  return (
    <div className="App">
      <Card name="Fade" color={'#e76f51'}>
        <HelloSpring/>
      </Card>

      <Card name="Counting Numbers" color={'#14213d'}>
        <NumberSpring/>
      </Card>
    </div>
  );
}

export default App;
