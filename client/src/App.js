import './App.css';
import CatalogueHeader from './components/catalogueheader/CatalogueHeader';
import Wines from './components/wines/Wines';
import Manage from './pages/winemanage/WineManage';

function App() {
  return (
    <>
      < CatalogueHeader />
      < Manage />
    </>
  );
}

export default App;
