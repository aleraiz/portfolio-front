import SkillLogo from "../SkillLogo";
import htmlImage from "../../public/html-5.svg";
import cssImage from "../../public/css-3.svg";
import javaScript from "../../public/javascriptLogo.svg";
import reactLogo from "../../public/reactLogo.svg";
import reduxLogo from "../../public/Redux.png";
import nextJs from "../../public/next-js.svg";
import mySQL from "../../public/mysql-official.svg";
import mongo from "../../public/mongodb.png";
import git from "../../public/git.svg";

export default function Skills() {
  return (
    <div className="flex flex-col items-center my-24">
      <h3 className="text-light text-3xl mb-10">Skills</h3>
      <div className=" w-full flex  flex-wrap h-auto items-center justify-around">
        <SkillLogo className={"w-3/6"} imgSrc={htmlImage} />
        <SkillLogo className={"w-3/6"} imgSrc={cssImage} />
        <SkillLogo className={"w-4/6"} imgSrc={javaScript} />
        <SkillLogo className={"w-4/6"} imgSrc={reactLogo} />
        <SkillLogo className={"w-6/6"} imgSrc={reduxLogo} />
        <SkillLogo className={"w-4/6"} imgSrc={nextJs} />
        <SkillLogo className={"w-4/6"} imgSrc={mySQL} />
        <SkillLogo className={"w-4/6"} imgSrc={mongo} />
        <SkillLogo className={"w-4/6"} imgSrc={git} />
      </div>
    </div>
  );
}
