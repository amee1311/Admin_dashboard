import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sign_In from './Components/Sign_In';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Sidebar from './Components/Sidebar/Sidebar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import TableList from './Components/Table';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  return (

    <div className="App">
    <Provider store={store}>
      <Routes>
        <Route path='/' exact element={<Sign_In />} />
        <Route path='/admin/signup' element={<Sign_Up />} />
        <Route element={<Sidebar />}>
        <Route path='/admin/signin' element={<Sign_In />} />
          <Route path='/admin/form' element={<Form />} />
          <Route path='/admin/form/:id' element={<Form />}/>
          <Route path='/admin/table' element={<TableList />} />
          <Route path='admin/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Provider>
    </div>
  );
}

export default App;
