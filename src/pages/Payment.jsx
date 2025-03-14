import React from "react";
import { CreditCard, Smartphone, Landmark, DollarSign, CheckCircle } from "lucide-react";
import { FaGooglePay, FaPaypal, FaPhoneAlt } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";


const Payment = () => {
  return (
    <div className="payment-container">
      <h2 className="payment-title">Choose a Payment Method</h2>
      <div className="payment-options">
        {/* Credit / Debit Card */}
        <div className="payment-option">
          <CreditCard size={40} className="payment-icon" />
          <p>Credit / Debit Card</p>
        </div>

        {/* UPI (Google Pay, PhonePe, Paytm) */}
        <div className="payment-option">
          <Smartphone size={40} className="payment-icon" />
          <p>UPI Payment</p>
        </div>

        {/* Google Pay */}
        <div className="payment-option">
          <FaGooglePay size={50} className="payment-icon google-pay" />
          <p>Google Pay</p>
        </div>

        {/* PhonePe */}
        <div className="payment-option">
          <FaPhoneAlt size={40} className="payment-icon phone-pe" />
          <p>PhonePe</p>
        </div>

        {/* Paytm */}
        <div className="payment-option">
          <SiPaytm size={40} className="payment-icon paytm" />
          <p>Paytm</p>
        </div>

        {/* Net Banking */}
        <div className="payment-option">
          <Landmark size={40} className="payment-icon" />
          <p>Net Banking</p>
        </div>

        {/* PayPal */}
        <div className="payment-option">
          <FaPaypal size={40} className="payment-icon paypal" />
          <p>PayPal</p>
        </div>

        {/* Cash on Delivery */}
        <div className="payment-option">
          <CheckCircle size={40} className="payment-icon" />
          <p>Cash on Delivery (COD)</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
