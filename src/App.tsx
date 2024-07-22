import Appbar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Contacts from './pages/contacts';
import NewContact from './pages/new-contact';

const App = () => {
    return (
        <>
            <header>
            <Appbar />
            </header>
          <main>
            <Routes>
              <Route path="/" element={<Contacts/>} />
              <Route path="/new-contact" element={<NewContact/>} />
            </Routes>
          </main>
        </>
    );
};

export default App;
