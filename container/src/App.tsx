
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHeader from './pageHeader/PageHeader';
import FindTransactionRemote from './FindTransactionRemote';
import AddPaymentsRemote from './AddPaymentsRemote';



function App() {


  return (
     <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route
            path="/find"element={<FindTransactionRemote />} />
          <Route path="/add" element={<AddPaymentsRemote />} />
          <Route path="/" element={<h1>Payments system</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
          {/* <Route path="/home" element={<PageHeader />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
