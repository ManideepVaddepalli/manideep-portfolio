import "./header.css";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "../../fonts/Poppins-SemiBold.ttf",
  src: "../../fonts/Poppins-Medium.ttf",
  src: "../../fonts/Poppins-Light.ttf",
});

export default function Header() {
  return (
    <header className="total-header-content">
      <div className="nav-button-container">
        <input type="checkbox"></input>
        <div className="lines-container">
          <div className="nav-button-firstline"></div>
          <div className="nav-button-secondline"></div>
          <div className="nav-button-thirdline"></div>
        </div>
        <div className={`${poppins.className} slide-box-container`}>
          <ul>
            <li>
              <Link href="#Home">Home</Link>
            </li>
            <li>
              <Link href="#About">About</Link>
            </li>
            <li>
              <Link href="#Projects">Projects</Link>
            </li>
            <li>
              <Link href="#Contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo-container">
        <Link href="/">
          <h1 className={poppins.className}>Manideep.dev</h1>
        </Link>
      </div>
      <div className="nav-items-desk">
        <ul className={poppins.className}>
          <li>
            <Link href="#Home">Home</Link>
          </li>
          <li>
            <Link href="#About">About</Link>
          </li>
          <li>
            <Link href="#Projects">Projects</Link>
          </li>
          <li>
            <Link href="#Contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
