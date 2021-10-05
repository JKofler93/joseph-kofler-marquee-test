import './App.css';
import LayoutUI from './components/LayoutUI/LayoutUI'
import PageUI from './components/PageUI/PageUI';
import {pages} from './content.json';

function App() {
  return (
    <div className="App">
      <LayoutUI pages={pages}/>
      <PageUI/>
    </div>
  );
}

export default App;
