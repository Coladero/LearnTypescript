import {Counter} from './components/Counter';
import {Usuario} from './components/Usuario';

import { TimerFather } from './components/TimerFather';

function App() {
  return (
    <div className="App">
      <h2>useState</h2>
      <Counter />

      <Usuario />
      <hr />
      <h2>UseEffect + useRef</h2>
      <TimerFather/>
    </div>
  );
}

export default App;
