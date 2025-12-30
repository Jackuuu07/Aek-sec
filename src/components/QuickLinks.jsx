import {
  CloudDownload,
  GraduationCap,
  BadgeCheck,
  BookOpen,
  Users,
  Headphones,
} from "lucide-react";

export default function QuickLinks() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-6 gap-1 py-14 px-1 text-center">

      <button className="flex flex-col items-center gap-3 py-8 rounded-xl hover:bg-gray-300 transition-all hover:-translate-y-1 hover:shadow-md">
        <CloudDownload className="w-10 h-10 text-gray-600" />
        <span className="text-sm font-medium">Downloads</span>
      </button>

      <button className="flex flex-col items-center gap-3 py-8 rounded-xl hover:bg-gray-300 transition-all hover:-translate-y-1 hover:shadow-md">
        <GraduationCap className="w-10 h-10 text-gray-600" />
        <span className="text-sm font-medium">Certifications</span>
      </button>

      <button className="flex flex-col items-center gap-3 py-8 rounded-xl hover:bg-gray-300 transition-all hover:-translate-y-1 hover:shadow-md">
        <BadgeCheck className="w-10 h-10 text-gray-600" />
        <span className="text-sm font-medium">Cisco Validated</span>
      </button>

      <button className="flex flex-col items-center gap-3 py-8 rounded-xl hover:bg-gray-300 transition-all hover:-translate-y-1 hover:shadow-md">
        <BookOpen className="w-10 h-10 text-gray-600" />
        <span className="text-sm font-medium">Training</span>
      </button>

      <button className="flex flex-col items-center gap-3 py-8 rounded-xl hover:bg-gray-300 transition-all hover:-translate-y-1 hover:shadow-md">
        <Users className="w-10 h-10 text-gray-600" />
        <span className="text-sm font-medium">Community</span>
      </button>

      <button className="flex flex-col items-center gap-3 py-8 rounded-xl hover:bg-gray-300 transition-all hover:-translate-y-1 hover:shadow-md">
        <Headphones className="w-10 h-10 text-gray-600" />
        <span className="text-sm font-medium">Support</span>
      </button>

    </section>
  );
}
