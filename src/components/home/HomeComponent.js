import Image from "next/image";
import Link from "next/link";
import htmlIcon from "@/images/htmlIcon.png";
import cssIcon from "@/images/cssIcon.png";
import javascriptIcon from "@/images/javascriptIcon.png";
import reactIcon from "@/images/reactIcon.png";
import nextjsIcon from "@/images/nextjsIcon.png";
import nodejsIcon from "@/images/nodejsIcon.png";
import expressjsIcon from "@/images/expressjsIcon.png";
import mongodbIcon from "@/images/mongodbIcon.png";
import "./homecomponent.css";
import localFont from "next/font/local";

const poppins = localFont({
  src: "../../fonts/Poppins-SemiBold.ttf",
  src: "../../fonts/Poppins-Medium.ttf",
  src: "../../fonts/Poppins-Light.ttf",
});
export default function HomeComponent() {
  return (
    <section
      id="Home"
      className={`${poppins.className} total-home-section-container`}
    >
      <div className="total-home-content-container">
        <div className="top-home-container">
          <div className="left-designation-home-container">
            <h1>Full - Stack Developer 👋🏻</h1>
            <p>
              Hi, I&apos;m Manideep Vaddepalli. A passionate Full-Stack
              JavaScript Developer based in Hyderabad, India. 📌
            </p>
            <div className="socials-home-container">
              <Link href="https://www.linkedin.com/in/manideep-vaddepalli/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </Link>
              <Link href="https://github.com/ManideepVaddepalli">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="right-blob-home-container">
            <div className="total-blob-animation"></div>
          </div>
        </div>
        <div className="bottom-home-container">
          <div className="tech-stack-title-container-home">
            <h3>Tech Stack</h3>
            <hr />
          </div>
          <div className="icons-home-container">
            <ul>
              <li className="individual-image-home-container">
                <Image src={htmlIcon} alt="htmlIcon" />
              </li>
              <li className="individual-image-home-container">
                <Image src={cssIcon} alt="cssIcon" />
              </li>
              <li className="individual-image-home-container">
                <Image src={javascriptIcon} alt="javascriptIcon" />
              </li>
              <li className="individual-image-home-container">
                <Image src={reactIcon} alt="reactIcon" />
              </li>
              <li className="individual-image-home-container">
                <Image src={nextjsIcon} alt="nextjsIcon" />
              </li>
              <li className="individual-image-home-container">
                <Image src={nodejsIcon} alt="nodejsIcon" />
              </li>
              <li className="individual-image-home-container">
                <Image src={expressjsIcon} alt="expressjsIcon" />
              </li>
              <li className="individual-image-home-container">
                <Image src={mongodbIcon} alt="mongodbIcon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
