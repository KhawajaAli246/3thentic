import './App.css';
import { Fragment, useState } from 'react';
import { VerifyPage } from './pages/VerifyPage';
import { PaymentPage } from './pages/PaymentPage';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Fragment>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<VerifyPage />} />
            <Route path='/dxdrop' element={<PaymentPage />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </Fragment>
  );
};

export default App;
