import "./aboutcomponent.css";
import localFont from "next/font/local";
const poppinsBlack = localFont({
  src: "../../fonts/Poppins-Black.ttf",
});
const poppins = localFont({
  src: "../../fonts/Poppins-SemiBold.ttf",
  src: "../../fonts/Poppins-Medium.ttf",
  src: "../../fonts/Poppins-Light.ttf",
});
export default function AboutComponent() {
  return (
    <section
      id="About"
      className={`${poppins.className} total-aboutme-section-component`}
    >
      <div className="total-center-about-container">
        <div className="left-image-about-container"></div>
        <div className="right-text-about-container">
          <h4>About Me</h4>
          <h2 className={poppinsBlack.className}>
            📍 A dedicated Full-stack Developer based in Hyderabad, India
          </h2>
          <p>
            Hello! I'm Manideep, a budding Full Stack MERN Developer. 🚀 With
            skills in HTML, CSS, JavaScript, and the MERN stack, I'm eager to
            dive into real-world challenges.
          </p>
          <p>
            While new to the professional world, I'm adept at navigating the
            nuances of web development. I'm adaptable 🌐, an effective
            communicator 🗣️, and a team player. My focus? Problem-solving,
            attention to detail 🔍, and commitment to timelines ⏳.
          </p>
          <p>
            Seeking fresh tech talent with both technical prowess and a
            team-first approach? Let's connect and explore synergies! 🌟
          </p>
        </div>
      </div>
    </section>
  );
}
