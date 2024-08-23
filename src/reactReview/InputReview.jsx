import React, { useState } from "react";

function InputReview() {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState();
  const [payment, setPayment] = useState("visa");
  const [comment, setComment] = useState("");
  const [delivery, setDelivery] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhone(event.target.value);
  };
  const handlePaymentMethod = (event) => {
    setPayment(event.target.value);
  };
  const handleDelivery = (event) => {
    setDelivery(event.target.value);
  };
  const handleComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <div className="element">
        <p>Username</p>
        <input
          value={userName}
          placeholder="username"
          onChange={handleUserName}
        />
        <p>{userName}</p>
      </div>
      <div className="element">
        <p>Phone Number</p>
        <input
          value={phone}
          placeholder="Phone number"
          type="number"
          onChange={handlePhoneNumber}
        />
        <p>{phone}</p>
      </div>
      <div className="element">
        <p>Payment method</p>
        <select value={payment} onChange={handlePaymentMethod}>
          <option value="Visa">Visa</option>
          <option value="CorisMoney">CorisMoney</option>
          <option value="OrangeMoney">OrangeMoney</option>
          <option value="MoovMoney">MoovMoney</option>
        </select>
        <p>{payment}</p>
      </div>
      <div className="element">
        <p>Delivery method</p>
        <label>Pick up</label>
        <input
          type="radio"
          value="Pick up"
          onChange={handleDelivery}
          checked={delivery === "Pick up"}
        />
        <label>Deliver</label>
        <input
          type="radio"
          value="Deliver"
          onChange={handleDelivery}
          checked={delivery === "Deliver"}
        />
        <p>{delivery}</p>
      </div>
      <div className="element">
        <p>Additional commentr</p>
        <textarea value={comment} onChange={handleComment}>
          Additional comment
        </textarea>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default InputReview;
