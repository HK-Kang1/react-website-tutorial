import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(e){
        setName(e.target.value);

    } 

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (<div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="visa">visa</option>
            <option value="mastercard">mastercard</option>
            <option value="giftcard">giftcard</option>

        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick up" checked={shipping == "Pick up"} onChange={handleShippingChange}></input>
            Pick up
        </label> <br></br>

        <label>
        <input type="radio" value="Delivery" checked={shipping == "Delivery"} onChange={handleShippingChange}></input>
            Delivery
        </label>

        <p>Shipping: {shipping}</p>

    </div>);
}

export default MyComponent