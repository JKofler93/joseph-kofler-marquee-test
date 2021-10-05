import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import LayoutUI from './components/LayoutUI/LayoutUI';
import PageUI from './components/PageUI/PageUI';
import {pages} from './content.json';


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

          <Route path='/g'>
            <Redirect to='/industries'/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
