import Appbar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Contacts from './pages/contacts';
import NewContact from './pages/new-contact';
import ModalForm from './pages/ModalForm';

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
            <ModalForm />
          </main>
        </>
    );
};

export default App;
