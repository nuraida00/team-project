
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tech Store. Все права защищены.</p>
    </footer>
  );
}

export default Footer;
