import './App.css';
import LayoutUI from './components/LayoutUI/LayoutUI';
import PageUI from './components/PageUI/PageUI';
import {pages} from './content.json';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LayoutUI pages={pages}/>
        <Switch>

        {pages && pages.map((page) => (
          <Route key={page.slug} path={`/${page.slug}`}>
            <PageUI blocks={page.blocks}/>
          </Route>
        ))}


      </Switch>
    </div>
  );
}

export default App;
