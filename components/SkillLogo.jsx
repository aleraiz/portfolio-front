import Image from "next/image";

export default function SkillLogo({ imgSrc, className, alt }) {
  return (
    <div className="h-32 w-32 flex justify-center items-center bg-light rounded-full m-8">
      <Image src={imgSrc} className={`${className}`} alt={`${alt}`} />
    </div>
  );
}
