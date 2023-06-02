import Skills from "./Skills";

export default function About() {
  return (
    <div
      className="w-full min-h-screen border border-light px-8 md:px-20 pt-32 md:pt-20 py-8 lg:py-20 "
      id="about"
    >
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl">About me</h3>
      </div>
      <div className="border rounded-2xl mt-8 md:mt-20 md:p-20  shadow-outline">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla
          odit reiciendis tenetur, itaque repudiandae laboriosam officia
          dignissimos saepe cupiditate dicta maiores reprehenderit. Pariatur
          non, molestiae quis iure debitis sunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni nulla odit reiciendis tenetur,
          itaque repudiandae laboriosam officia dignissimos saepe cupiditate
          dicta maiores reprehenderit. Pariatur non, molestiae quis iure debitis
          sunt.
        </p>
      </div>
      <Skills />
    </div>
  );
}
