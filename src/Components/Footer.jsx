const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Built by <span className="highlight">Piyush Khadka Chhetri</span>
      </p>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
