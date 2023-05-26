export default function TextAnimated({ text, className = "" }) {
  return (
    <div className="w-full mx-auto py-2 overflow-hidden flex items-start justify-center">
      <h1
        className={`${className} inline-block w-full text-light font-bold capitalize text-6xl`}
      >
        {text}
      </h1>
    </div>
  );
}
