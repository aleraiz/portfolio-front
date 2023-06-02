export default function TextAnimated({ text, name, className = "" }) {
  return (
    <div className="w-full py-2  flex items-center justify-center">
      <h1
        className={`${className} as inline-block w-full text-light font-bold capitalize text-4xl lg:text-6xl text-center`}
      >
        {text} <br />
        {name}
      </h1>
    </div>
  );
}
