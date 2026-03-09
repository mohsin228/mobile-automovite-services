export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-gray-300">
          AutoService has been serving customers since 2010. Our mission is to
          provide reliable, fast, and affordable automotive services using the
          latest tools and certified mechanics.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-gray-300">
          To be the trusted automotive partner for drivers by delivering
          exceptional care and unmatched expertise.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-white mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* placeholder cards */}
          {['Alice', 'Bob', 'Charlie'].map((name) => (
            <div
              key={name}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-lg text-center"
            >
              <div className="h-24 w-24 mx-auto bg-gray-700 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="text-gray-400">Mechanic</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
