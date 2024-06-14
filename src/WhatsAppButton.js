import React from "react";
import { Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+916384946793"; // Replace with your WhatsApp number
  const message = "Hello! I would like to chat with you.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button variant="success" className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp size={24} />
    </Button>
  );
};

export default WhatsAppButton;
