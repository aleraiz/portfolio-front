export default function About() {
  return (
    <div className="w-full min-h-screen px-32 border border-light py-20">
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl">About me</h3>
      </div>
      <div className="border rounded-2xl mt-20 p-20 shadow-outline">
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
      <div className="border border-light flex flex-col items-center my-24">
        <h3 className="text-light text-2xl">Skills</h3>
        <div className=" w-full flex  flex-wrap h-auto items-center justify-around">
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
          <div className="h-28 w-28 bg-red-400 rounded-full m-8"></div>
        </div>
      </div>
    </div>
  );
}
