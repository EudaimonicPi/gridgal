import { Button, Modal } from "react-bootstrap";
import ModalHeader from "./createComponents/modalHeader";

export default function ConfirmModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <ModalHeader title={"🎉 Fractal Grid Submitted! 🎉"} />
      
      {/* Cute Modal Body */}
      <Modal.Body style={{
          backgroundColor: "#f9f9f9", // Soft gray background
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif"
        }}>
        <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
          🌟 Thanks for submitting! Your grid has been sent for moderator approval.  
          Check back later to see if it's been added.  
          <br /><br />
          (Updates on this are not possible... yet! 😜)
        </p>
      </Modal.Body>

      {/* Cute Footer */}
      <Modal.Footer style={{ justifyContent: "center" }}>
        <Button 
          variant="primary" 
          onClick={handleClose}
          style={{
            backgroundColor: "#4CAF50", 
            border: "none", 
            padding: "10px 20px", 
            fontSize: "16px",
            borderRadius: "8px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
        >
          🎨 Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
