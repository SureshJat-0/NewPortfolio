import AboutPhoto from "../assets/AboutPhoto.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col mx-20 gap-4 items-center">
      <div className="flex flex-col justify-center items-center my-4">
        <span>Introduction</span>
        <span className="text-3xl font-bold">Who I Am</span>
      </div>
      <div className="flex">
        <img src={AboutPhoto} alt="ProfileImage" className="rounded-2xl bg-gray-300 m-8"/>
        <div className="flex flex-col mx-14 tracking-wider">
          <p className="my-4">
            I'm Suresh Jat, a passionate developer with strong skills in the MERN stack and Data Structures & Algorithms. I enjoy building fast, responsive, and visually appealing web applications while constantly improving my problem-solving abilities through DSA practice. I'm driven by curiosity, love experimenting with new technologies, and aim to create projects that are both functional and impactful. I believe in writing clean, efficient code that enhances user experience and scalability. My long-term goal is to contribute to innovative solutions that make a real difference in people's lives.</p>
          <div className="">
            <div className="card">card1</div>
            <div className="card">card2</div>
            <div className="card">card3</div>
          </div>
          <div className="icons">
            <span>icon1</span>
            <span>icon1</span>
            <span>icon1</span>
            <span>icon1</span>
            <span>icon1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
