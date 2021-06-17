import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="row justify-content-center text-center fade-in-logo align-items-end d-none d-md-block">
        <div className="col-12">
          <div className="my-2" style={{ fontSize: "1.25rem" }}>
            <a className="mx-2" href="https://twitter.com/Diablo">
              <FaTwitter />
            </a>
            <a className="mx-2" href="https://www.youtube.com/user/diablo">
              <FaYoutube />
            </a>
            <a className="mx-2" href="https://www.twitch.tv/diablo">
              <FaTwitch />
            </a>
          </div>
          <p>
            <small>
              This site is in no way affiliated with{" "}
              <a href="https://www.blizzard.com/">Blizzard Entertainment, Inc.</a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
