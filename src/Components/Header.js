import logo from "../images/d4-logo.png";

const Header = () => {
  return (
    <div className="row justify-content-center text-center fade-in-logo align-items-end d-none d-md-block">
      <div className="col-12">
        <img src={logo} className="img-fluid w-50 h-50" alt="Diablo IV Logo" />
      </div>
    </div>
  );
};

export default Header;
