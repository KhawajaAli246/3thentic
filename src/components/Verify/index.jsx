import React, { useState } from "react";
import "./index.css";
import VerifyImg from "../../assets/VerifyImg.png";
import contract from "../../ethereum/collection";
import { useToasts } from "react-toast-notifications";
const Verify = () => {
  const [UserArress, setUserArress] = useState("");
  const [ShowTokens, setShowTokens] = useState(false);
  const [TokenAmount, setTokenAmount] = useState(0);
  const { addToast } = useToasts();

  const onVerify = async () => {
    if (UserArress === "") {
      addToast(`User Address Cannot be empty`, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    let _TokenAmount = await contract.methods.balanceOf(UserArress, 0).call();
    setShowTokens(true);
    setTokenAmount(_TokenAmount);
  };

  return (
    <div className="verify-container">
      <div className="verify-header">Verify Owner</div>
      <div className="verify-desc">
      Verifying Ticket Instructions:<br></br> 
      <br></br>   
      Step 1: Connect this webpage to your MetaMask wallet.<br></br>
      Located in the top right hand corner of this page.<br></br>
      Step 2: Request the public wallet address from ticket seller.<br></br>
      Step 3: Enter the ticket sellers wallet address in the box below.<br></br>
      Step 4: Press "Verify" to view results.<br></br>
      If the ticket seller does not have 3-Thentic ticket verification service 
      connected to their ticket they can add it at
      <a
                rel="noreferrer"
                href="https://festywesty.com/3-thentic-buynow/"
                target="_blank"
                className="hero-link"
              >
                ADD VERIFICATION NFT.
              </a>  <br></br>
      Please allow 24-48 hours for processing.
      </div>
      <div className="verify-input-container">
        <input
          type="text"
          className="verify-input"
          onChange={(e) => {
            setUserArress(e.target.value);
            setShowTokens(false);
          }}
          placeholder="Enter Address"
        />
        <button className="verify-btn" onClick={onVerify}>
          Verify
        </button>
      </div>
      {ShowTokens && (
        <div className="balance-of-user">
          This user has {TokenAmount} Ticket
        </div>
      )}
      <img src={VerifyImg} className="VerifyImgBackground" alt="verify.png" />
    </div>
  );
};


export default Verify;
