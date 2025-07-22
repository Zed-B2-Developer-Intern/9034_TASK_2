




export default function Skills() {
  return (
    <>
   {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Ganesan</span> 👋
            </h1>
            <p className="text-lg md:text-xl mb-6">
              A passionate Web Developer building websites using
              <strong> Next.js</strong>, <strong>TypeScript</strong> & <strong>Tailwind CSS</strong>.
            </p>
            
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/me.jpg"
              alt="Ganesan Profile"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-600 shadow-lg"
            />
          </div>
        </section>
        </>
  );
}