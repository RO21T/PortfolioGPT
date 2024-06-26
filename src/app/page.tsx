import Image from "next/image";
import Link from "next/link";
import Form from "./form";
import dotenv from 'dotenv';

dotenv.config()

export default function Home() {
  return (
    <>
      <title>Rohit C</title>
      <div className="left">
        <div className="top">
          <div className="name">
            <h1>ROHIT C</h1>
          </div>
          <div className="image">
            <Image className="profile" priority={true} src={"/images/profile.png"} width={300} height={300} alt="Rohit C"/>
          </div>
        </div>
        <div className="bottom">
          <div className="description">
            <p>An enthusiastic and goal-driven Computer Science and Engineering fresher with proficient team player abilities with adequate knowledge of mainstream programming languages seeking an opportunity to put his potential to full use in the field of Software Development.</p>
          </div>
          <div className="social">
            <div className="one">
              <Link className="link1" href={'https://github.com/RO21T'}>
                <Image className="github" priority={true} src={"/images/github.png"} width={45} height={45} alt="Github"/>
              </Link>
            </div>
            <div className="two">
              <Link className="link2" href={'https://www.linkedin.com/in/c-rohit'}>
                <Image className="linkedin" priority={true} src={"/images/linkedin.png"} width={50} height={45} alt="LinkedIn"/>
              </Link>
            </div>
            <div className="three">
              <Link className="link3" href={'mailto:rohitc21official@gmail.com'}>
                <Image className="gmail" priority={true} src={"/images/gmail.png"} width={50} height={50} alt="Gmail"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="up">
          <h1>Portfolio GPT</h1>
        </div>
        <div className="down">
          <Form GEMINI_API_KEY={process.env.GEMINI_API_KEY}/>
        </div>
      </div>
    </>
  );
}
