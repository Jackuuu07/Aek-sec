export default function ImageTextSection() {
  return (
    <section className="py-24 px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* ===== Heading ===== */}
        <h2 className="text-4xl font-light/200 mb-16 text-black">
          Driving AI innovation
        </h2>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="AI Canvas"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Announcing AekSec AI Canvas
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Watch how AI Canvas brings real-time telemetry, AI insights,
                and team collaboration into a single shared workspace.
              </p>

              <div className="flex flex-col gap-3">
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Watch AI Canvas demo →
                </a>
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Learn about our agentic AI approach →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
              alt="AI Defense"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                AekSec AI Defense
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Secure your organization’s AI development and usage with
                visibility, guardrails, and live threat intelligence.
              </p>

              <div className="flex flex-col gap-3">
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Learn about AI Defense →
                </a>
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Request a demo →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3"
              alt="Secure AI Factory"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Secure AI Factory with NVIDIA
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                From AI PODs to fully managed AI stacks, see how AekSec
                accelerates enterprise AI adoption.
              </p>

              <div className="flex flex-col gap-3">
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Explore Secure AI Factory →
                </a>
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Learn about AI infrastructure →
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="AI Infrastructure"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Mass-scale AI infrastructure
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Unlock scalable, high-performance AI with our portfolio of
                advanced AI infrastructure solutions.
              </p>

              <div className="flex flex-col gap-3">
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Explore advanced AI portfolio →
                </a>
                <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Learn about AekSec Silicon One →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ===== Bottom CTAs ===== */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Explore more AI news
          </button>

          <a className="text-blue-600 font-medium hover:underline">
            Why AekSec for the AI era →
          </a>
        </div>

      </div>
    </section>
  );
}
