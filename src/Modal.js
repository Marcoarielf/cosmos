import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  backgroundColor: "rgba(0,0,0,0.7)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
};

const CLOSE_STYLES = {
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 1000,
  outline: "none",
  border: "none",
  background: "none",
  fontWeight: "bold",
  cursor: "pointer",
};

const CONTAINER_MODAL = {
  color: "#000",
};

export default function Modal({ isOpenModal, children, onClose }) {
  if (!isOpenModal) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} className="overlay" />
      <div style={MODAL_STYLES}>
        <button style={CLOSE_STYLES} onClick={onClose}>
          X
        </button>
        <div style={CONTAINER_MODAL} className="containerModal">
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
