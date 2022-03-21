import './App.css';
import Header from './header/header';
import QuickSearch from './quickSearch/quickSearch';
import DRouter from './router/router';

function App() {
  return (
    <div className="App">
       <Header />
       <DRouter />
      <QuickSearch />
    </div>
  );
}

export default App;
