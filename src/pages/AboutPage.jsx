import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutPhoto from "../assets/AboutPhoto.png";
import { faBagShopping, faCode, faEnvelope, faGraduationCap, faVoicemail, faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col mx-24 gap-4 items-center">
      <div className="flex flex-col justify-center items-center my-4">
        <span>Introduction</span>
        <span className="text-3xl font-bold">Who I Am</span>
      </div>
      <div className="flex">
        <img src={AboutPhoto} alt="ProfileImage" className="rounded-2xl bg-gray-300 m-12"/>
        <div className="flex flex-col mx-16 tracking-wider">
          <p className="my-4">
            I'm Suresh Jat, a passionate developer with strong skills in the MERN stack and Data Structures & Algorithms. I enjoy building fast, responsive, and visually appealing web applications while constantly improving my problem-solving abilities through DSA practice. I'm driven by curiosity, love experimenting with new technologies, and aim to create projects that are both functional and impactful. I believe in writing clean, efficient code that enhances user experience and scalability. My long-term goal is to contribute to innovative solutions that make a real difference in people's lives.</p>
          <div className="grid grid-cols-3 gap-8 my-4">
            <div className="border rounded-2xl p-6">
              <FontAwesomeIcon icon={faCode} className="text-3xl text-gray-600 my-1"/>
              <h3 className="font-bold">Skills</h3>
              <p className="text-sm mt-4 mb-2">Go to Skills↗</p>
            </div>
            <div className="border rounded-2xl p-6">
              <FontAwesomeIcon icon={faBagShopping} className="text-3xl text-gray-600 my-1"/>
              <h3 className="font-bold">Projects</h3>
              <p className="text-sm mt-4 mb-2">Go to Projects↗</p>
            </div>
            <div className="border rounded-2xl p-6">
              <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-gray-600 my-1"/>
              <h3 className="font-bold">Education</h3>
              <p className="text-sm mt-4 mb-2">B.Tech in Computer Science</p>
            </div>
          </div>
          <div className="icons flex gap-2 my-2">
            <FontAwesomeIcon icon={faGithub} className="text-4xl text-gray-800 cursor-pointer"/>
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-gray-800 cursor-pointer"/>
            <FontAwesomeIcon icon={faXTwitter} className="text-4xl text-gray-800 cursor-pointer"/>
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-gray-800 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}
