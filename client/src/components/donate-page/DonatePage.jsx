import { ethers } from "ethers";
import React, { useState} from "react";
import "./styles.css"

export default function DonatePage(props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  
  const { contract } = props.WalletState;

  const handleDonate = async(e) => {
    e.preventDefault();
    const donationValue = ethers.utils.parseEther(amount.toString());
  
    const transaction = await contract.donate(name, message, donationValue, {
      value: donationValue
    });
        const receipt = await transaction.wait();
  
    console.log("Transaction receipt: ", receipt);
  }

  return (
    <div className="CryptoDonation">
      <h1>Buy me a Coffee!</h1>
      <form className="CryptoDonation-form" onSubmit={handleDonate}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <label>
          Amount (in ether):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

