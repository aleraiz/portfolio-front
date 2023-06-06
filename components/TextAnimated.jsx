export default function TextAnimated({ text, name, className = "" }) {
  return (
    <div className="w-full py-2  flex items-center justify-center">
      <h1
        className={`${className}  xl:inline-block  w-full text-light font-bold capitalize text-4xl sm:text-6xl lg:text-6xl xl:text-7xl text-center`}
      >
        {text} <br className="xl:hidden" />
        {name}
      </h1>
    </div>
  );
}
