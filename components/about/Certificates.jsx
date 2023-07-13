import webDevCertificate from "../../public/DesarrolloWeb.png";
import JavaScriptCertificate from "../../public/JavaScript.png";
import ReactCertificate from "../../public/ReactJs.png";
import BootcampCertificate from "../../public/Bootcamp.png";
import Certificate from "./Certificate";

const certificates = [
  {
    imgSrc: webDevCertificate,
    alt: "Web development certificate",
  },
  {
    imgSrc: JavaScriptCertificate,
    alt: "JavaScript certificate",
  },
  {
    imgSrc: ReactCertificate,
    alt: "ReactJs certificate",
  },
  {
    imgSrc: BootcampCertificate,
    alt: "FullStack Web Development Bootcamp certificate",
  },
];

export default function Certificates() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-light text-3xl my-10 lg:py-12">Certificates</h3>
      <div className="w-full 2xl:w-[80%] flex flex-wrap h-auto items-center justify-around gap-10">
        {certificates.map((certificate, i) => {
          return (
            <Certificate
              certificate={certificate}
              i={i}
              key={i + certificate.imgSrc}
            />
          );
        })}
      </div>
    </div>
  );
}
