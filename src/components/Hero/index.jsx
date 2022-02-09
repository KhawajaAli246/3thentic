import React from "react";
import Nav from "../Nav";
import "./index.css";
import Ticket from "../../assets/Ticket.jpg";
const Hero = ({ address, setAddress }) => {
  return (
    <div className="hero-background">
      <Nav address={address} setAddress={setAddress} />
      <div className="hero-container">
        <div className="hero-content-container">
          <div className="hero-content-header-container">
            <div className="hero-content-header">
              <span className="hero-content-header-text1">Fighting ticket</span>
              <span className="hero-content-header-text2">fraud with the</span>
              <span className="hero-content-header-text3">
                security of the BlockChain
              </span>
            </div>
          </div>
          <div className="hero-content-desc">
            If you have ever used the phrase "admin can you verify this ticket?"
            then you understand the risk associated with buying second hand
            tickets for your favorite live events. With 3-Thentic's NFT ticket
            verification service you can use the power of web 3.0 and BlockChain
            technology to be sure you are buying 100% verified tickets every
            time. You do need to create a crypto wallet inorder to use our
            verification service but it is easy to do and doesn't cost anything.
            We recommend using MetaMask, this is where you will get your address wallet, 
            store your NFT and get free test Ether for the "gas" fee (see our Faq's for more info).
            <br />
            <br />
            <span className="hero-faq-link">
              If you have questions please visit our
              <a
                rel="noreferrer"
                href="https://festywesty.com/3-thentic-faq/"
                target="_blank"
                className="hero-link"
              >
                Faq Page
              </a>
            </span>
            <br />
            <br />
            <span className="hero-faq-link">
              Register at
              <a
                rel="noreferrer"
                href="https://metamask.io/"
                target="_blank"
                className="hero-link"
              >
                MetaMask
              </a>
            </span>
            
          </div>
        </div>
        <div className="hero-img-container">
          <img src={Ticket} className="hero-img" alt="hero-img.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
