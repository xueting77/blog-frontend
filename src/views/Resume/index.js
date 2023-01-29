import styles from "./index.module.css";
import linearImg from "../../images/linear.png";
import upLinearImg from "../../images/up-linear.png";
import dotImg from "../../images/timeline-dot.png";
import photo1Img from "../../images/photo1.jpeg";
import photo2Img from "../../images/photo2.jpeg";
import photo3Img from "../../images/photo3.jpeg"
import photo4Img from "../../images/photo4.jpeg"
import photo5Img from "../../images/photo5.jpeg"
import photo6Img from "../../images/photo6.jpeg"
import photo7Img from "../../images/photo7.jpeg"
import photo8Img from "../../images/photo8.jpeg"
import photo9Img from "../../images/photo9.jpeg"
import photo10Img from "../../images/photo10.jpeg"
import photo11Img from "../../images/photo11.jpeg"
import photo12Img from "../../images/photo12.jpeg"

export default function Resume() {
  const name = "Tyra / Xueting Wang";
  const intro = [
    "Master of Engineering (Software), The University of Melbourne",
    "+61 0474 253 618 | xueting.wang77@gmail.com",
    "www.linkedin.com/in/xueting-wang77",
  ];
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "Sass",
    "JavaScript",
    "ES6",
    "TypeScript",
    "React.js",
    "Vue.js",
    "Redux.js",
    "HTTP",
  ];
  const backendSkills = ["Node.js", "Python", "Django", "Java"];
  const manageSkills = ["Git", "Agile", "Prototyping", "PRD"];
  const experience = [
    {
      time: "Jun 2021 - Oct 2021",
      title:
        "Internship  —  Frontend Developer  —  Xinhuazhiyun, Hangzhou, China",
      projects: [
        {
          title: "React Based Web App: Magic Short Video Making Platform",
          desc: [
            "• Work actively in frontend team to build reusable React components, used for video creating and editing.",
            "• Basically use Anime.js to achieve the anime effects.",
          ],
        },
        {
          title: "React Based Web App: Wenzhou Cultural School",
          desc: [
            "• Develop the whole web app using react, to show how the Wenzhou Cultural School developed in history.",
            "• Code the UI shapes and their interactions by using Aneme.js, Canvas and JavaScript.",
          ],
        },
      ],
    },
    {
      time: "Jan 2021 - Apr 2021",
      title: "Internship  —  Frontend Developer  —  Lanhu, Beijing, China",
      projects: [
        {
          title: "Vue Based Web App: Lanhu Web App",
          desc: [
            "• Work in Agile environment to maintain and optimize the collaborative design process platform for the users.",
            "• Work closely with product owner, backend developer and designer to continuously develop new features, such as adding guidance for the beginners and developing the click-to-copy function.",
            "• Optimizing the picture lists and groups so that the users could find and operate the pictures more easily.",
          ],
        },
        {
          title: "Vue Based Website: Lanhu Official Website",
          desc: [
            "• Gather the requirements from the Marketing department and optimize the official website accordingly.",
            "• Add Cases page and make the cooperation and data more gorgeous by adding anime.",
          ],
        },
      ],
    },
    {
      time: "May 2018 - Jun 2020",
      title: "Fulltime  -  Product Owner  -  Zenjoy, Beijing, China",
      projects: [
        {
          title: "Mobile Game: My Home - Design Dreams",
          desc: [
            "• Design the rules of matching 3 level, including basic elements and how the game level passes or fails.",
            "• Design the in-game currency system and personalized selling rules.",
            "• Design the festival related system to promote activity and income.",
          ],
        },
        {
          title: "Mobile Game: Word Connect & Word Connect (Japnese)",
          desc: [
            "• Design the rules of the system to generate a word puzzle level.",
            "• Design the systems of daily quest, login reward, and ranking list to promote the users’ activities.",
            "• Design and optimize the advertisement system to promote the income.",
          ],
        },
      ],
    },
    {
      time: "Jul 2016 - May 2018",
      title: "Fulltime  -  Product Owner  -  Baihe, Beijing, China",
      projects: [
        {
          title: "New Users Attraction and Expansion",
          desc: [
            "• Optimize the user register process and promote the register rate by 6%.",
            "• Make more than 5 interesting mobile projects to gain free new users.",
          ],
        },
        {
          title: "Quick Chat (1v1 Video Chat)",
          desc: [
            "• Design the PRD and UE of two users’ online video chat.",
            "• Make iteration by balancing sex ratio, enhancing user guidance, and promoting membership income.",
          ],
        },
      ],
    },
  ];
  const education = [
    {
      time: "Jul 2020 - Present",
      title:
        "Master of Engineering (Software)  —  The University of Melbourne",
      projects: [
        {
          title:
            "React Based Web App: A data normalization platform for Telstra (Scored H1)",
          desc: [
            "• Gather requirements from the clients and design the prototype to re-confirm with them.",
            "• Be the charge of Frontend, manage the team of 5 students, assign the development tasks.",
            "• Test the whole system as the stated in-scope functions and hand over to the clients.",
          ],
        },
        {
          title: "Java Based System: A distributed whiteboard",
          desc: [
            "• Develop the Client and the Server using the Socket Programming.",
            "• Design the whiteboard operations logic and code them out.",
          ],
        },
      ],
    },
    {
      time: "Sept 2011 - Jun 2015",
      title:
        "Bachelor of Management (E-Business)  —  The University of International Business and Economics, Beijing, China",
      projects: [
        {
          title: "",
          desc: [
            "· Meritorious Winner of 2013 Mathematical Contest in Modelling (15% Worldwide).",
            "· 2 nd Scholarship of Comprehensive Excellence.",
            "· Green Power Sports Scholarship.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="routeContainer">
      <div
        className="singleWrap"
        style={{ display: "flex", flexDirection: "row", height: "300px" }}
      >
        <div className={styles.nameWrap}>
          <div className={styles.name}>{name}</div>
          {intro.map((v, i) => (
            <div className={styles.intro} key={i}>
              {v}
            </div>
          ))}
        </div>
        <div className={styles.photoWrap}>
          <div className={styles.photoColumn}>
            <img src={upLinearImg} alt="" className={styles.upLinear} />
            <img src={photo1Img} alt="" className={styles.photo} />
            <img src={photo2Img} alt="" className={styles.photo} />
            <img src={photo3Img} alt="" className={styles.photo} />
            <img src={photo4Img} alt="" className={styles.photo} />
            <img src={photo1Img} alt="" className={styles.photo} />
            <img src={photo2Img} alt="" className={styles.photo} />
            <img src={photo3Img} alt="" className={styles.photo} />
            <img src={photo4Img} alt="" className={styles.photo} />
            <img src={linearImg} alt="" className={styles.downLinear} />
          </div>
          <div className={styles.photoColumn}>
            <img src={upLinearImg} alt="" className={styles.upLinear} />
            <img src={photo5Img} alt="" className={styles.photo1} />
            <img src={photo6Img} alt="" className={styles.photo1} />
            <img src={photo7Img} alt="" className={styles.photo1} />
            <img src={photo8Img} alt="" className={styles.photo1} />
            <img src={photo5Img} alt="" className={styles.photo1} />
            <img src={photo6Img} alt="" className={styles.photo1} />
            <img src={photo7Img} alt="" className={styles.photo1} />
            <img src={photo8Img} alt="" className={styles.photo1} />
            <img src={linearImg} alt="" className={styles.downLinear} />
          </div>
          <div className={styles.photoColumn}>
            <img src={upLinearImg} alt="" className={styles.upLinear} />
            <img src={photo9Img} alt="" className={styles.photo2} />
            <img src={photo10Img} alt="" className={styles.photo2} />
            <img src={photo11Img} alt="" className={styles.photo2} />
            <img src={photo12Img} alt="" className={styles.photo2} />
            <img src={photo9Img} alt="" className={styles.photo2} />
            <img src={photo10Img} alt="" className={styles.photo2} />
            <img src={photo11Img} alt="" className={styles.photo2} />
            <img src={photo12Img} alt="" className={styles.photo2} />
            <img src={linearImg} alt="" className={styles.downLinear} />
          </div>
        </div>
      </div>
      <div className="singleWrap">
        <div className={styles.title}>Technical Skills</div>
        <div
          className={styles.skillWrap}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {frontendSkills.map((v, i) => (
            <div className={styles.skill1} key={i}>
              {v}
            </div>
          ))}
          {backendSkills.map((v, i) => (
            <div className={styles.skill2} key={i}>
              {v}
            </div>
          ))}
          {manageSkills.map((v, i) => (
            <div className={styles.skill3} key={i}>
              {v}
            </div>
          ))}
        </div>
      </div>
      <div className="singleWrap">
        <div className={styles.title}>Professional Experience</div>
        <div className={styles.experienceWrap}>
          {experience.map((v, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "50px",
              }}
            >
              <div className={styles.time}>{v.time}</div>
              <div className={styles.timelineWrap}>
                <img src={dotImg} alt="" className={styles.dot} />
                <div className={styles.vertical}></div>
              </div>
              <div style={{ textAlign: "left", width: "75%" }}>
                <div className={styles.exTitle}>{v.title}</div>
                {v.projects.map((v1, i1) => (
                  <div key={i1}>
                    <div className={styles.projTitle}>{v1.title}</div>
                    {v1.desc.map((v2, i2) => (
                      <div key={i2} className={styles.projDesc}>
                        {v2}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="singleWrap">
        <div className={styles.title}>Education</div>
        <div className={styles.experienceWrap}>
          {education.map((v, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "50px",
              }}
            >
              <div className={styles.time}>{v.time}</div>
              <div className={styles.timelineWrap}>
                <img src={dotImg} alt="" className={styles.dot} />
                <div className={styles.vertical}></div>
              </div>
              <div style={{ textAlign: "left", width: "70%" }}>
                <div className={styles.exTitle}>{v.title}</div>
                {v.projects.map((v1, i1) => (
                  <div key={i1}>
                    <div className={styles.projTitle}>{v1.title}</div>
                    {v1.desc.map((v2, i2) => (
                      <div key={i2} className={styles.projDesc}>
                        {v2}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
