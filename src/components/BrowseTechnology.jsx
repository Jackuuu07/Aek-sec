/* eslint-disable no-unused-vars */
import {
  Network,
  Fingerprint,
  Eye,
  Users,
  Server,
  Sparkles,
} from "lucide-react";

export default function BrowseTechnology() {
  return (
    <section className="py-24 px-10 bg-white text-center">
      {/* Heading */}
      <h2 className="text-4xl font-light mb-16 text-gray-900">
        Browse by technology
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        <TechCard icon={Network} label="Networking" />
        <TechCard icon={Fingerprint} label="Security" />
        <TechCard icon={Eye} label="Observability" />
        <TechCard icon={Users} label="Collaboration" />
        <TechCard icon={Server} label="Computing" />
        <TechCard icon={Sparkles} label="AI" />

      </div>

      {/* Bottom buttons */}
      <div className="mt-16 flex items-center justify-center gap-8">
        <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Browse all products
        </button>

        <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
          Browse all services
          <span>›</span>
        </button>
      </div>
    </section>
  );
}

/* ---------- Card Component ---------- */
function TechCard({ icon: Icon, label }) {
  return (
    <button
      className="
        group
        w-full
        rounded-3xl
        border border-gray-300
        px-6 py-14

        flex flex-col items-center justify-center gap-6

        transition-all duration-300
        hover:border-blue-600
        hover:shadow-md
      "
    >
      <Icon
        className="
          w-16 h-16
          text-blue-600
          stroke-[1.2]
        "
      />
      <span className="text-lg font-medium text-gray-900">
        {label}
      </span>
    </button>
  );
}
