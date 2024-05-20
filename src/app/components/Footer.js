const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Footer</p>
    </footer>
  );
};

const footerStyle = {
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

export default Footer;
