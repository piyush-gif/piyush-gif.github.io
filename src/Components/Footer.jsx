const Footer = () => {
  return (
    <footer className="text-center py-8 px-4 bg-[#0a192f] text-[#8892b0] text-sm font-mono border-t border-[#233554]">
      <p>
        Built by <span className="text-[#64f4ac] font-medium">Piyush Khadka Chhetri</span>
      </p>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
