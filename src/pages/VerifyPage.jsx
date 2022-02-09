import React, { useState } from 'react';
import Hero from '../components/Hero';
import Verify from '../components/Verify';
import Transfer from '../components/Transfer';
import Footer from '../components/Footer';
const VerifyPage = () => {
  const [address, setAddress] = useState(null);

  return (
    <div>
      <Hero address={address} setAddress={setAddress} />
      <Verify />
      <Transfer address={address} setAddress={setAddress} />
      <Footer />
    </div>
  );
};

export default VerifyPage;
