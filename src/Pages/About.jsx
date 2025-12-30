import { Mail, Phone, Globe, Shield, Users, Briefcase } from "lucide-react";
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {

    return (
        <>
        <Navbar/>
        
        <main className="bg-white text-gray-800">

        {/* ================= HERO / ABOUT ================= */}
        <section className="relative bg-gradient-to-r from-blue-50 to-white py-24 px-10">
            <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-light mb-6">
                About AekSec
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                AekSec is building the critical infrastructure required to securely
                power the next generation of artificial intelligence. We help
                enterprises design, deploy, and protect AI systems with confidence,
                scale, and trust.
            </p>
            </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="py-20 px-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
            <div>
                <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
                <Shield className="text-blue-600" />
                Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to make AI infrastructure secure, observable,
                and resilient by design. As AI adoption accelerates, organizations
                face growing risks around data integrity, model behavior, and
                operational complexity.
                </p>
                <p className="text-gray-600 leading-relaxed">
                AekSec enables businesses to innovate faster while maintaining
                strong security posture, regulatory compliance, and operational
                clarity across their AI lifecycle.
                </p>
            </div>

            <div>
                <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
                <Globe className="text-blue-600" />
                Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                We envision a future where AI systems are transparent, trusted,
                and safe by default. AekSec aims to become the foundational layer
                for AI-native enterprises worldwide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                By unifying security, networking, and AI operations, we empower
                teams to focus on innovation rather than infrastructure risk.
                </p>
            </div>
            </div>
        </section>

        {/* ================= CAREERS ================= */}
        <section className="bg-gray-50 py-20 px-10">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <Briefcase className="text-blue-600" />
                Careers at AekSec
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-6">
                At AekSec, we are always looking for passionate engineers,
                researchers, designers, and security professionals who want to
                shape the future of AI infrastructure.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
                We foster a culture of ownership, continuous learning, and technical
                excellence. Whether you’re building distributed systems, securing
                AI pipelines, or designing enterprise experiences, your work will
                have real-world impact.
            </p>

            <button className="text-blue-600 font-medium hover:underline">
                View open positions →
            </button>
            </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="py-20 px-10">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <Mail className="text-blue-600" />
                Contact Us
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
                Whether you’re an enterprise customer, a partner, or a researcher,
                our team is here to help you navigate your AI infrastructure journey.
            </p>

            <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-3">
                <Mail size={18} /> support@aeksec.com
                </p>
                <p className="flex items-center gap-3">
                <Phone size={18} /> +1 (000) 000-0000
                </p>
            </div>
            </div>
        </section>

        {/* ================= CONNECT WITH AEKSEC ================= */}
        <section className="bg-gray-50 py-20 px-10">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <Users className="text-blue-600" />
                Connect with AekSec
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-4xl mb-6">
                Stay connected with AekSec to receive product updates, research
                insights, security advisories, and announcements.
            </p>

            <ul className="space-y-3 text-gray-600">
                <li className="hover:text-blue-400 transition">LinkedIn</li>
                <li className="hover:text-blue-400 transition">Twitter / X</li>
                <li className="hover:text-blue-400 transition">Developer Blog</li>
                <li className="hover:text-blue-400 transition">Newsletter</li>
            </ul>
            </div>
        </section>

        {/* ================= FEEDBACK ================= */}
        <section className="py-20 px-10">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">
                Feedback
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl">
                Your feedback helps us improve our products and services. We actively
                listen to our customers and partners to evolve AekSec in ways that
                matter most.
            </p>
            </div>
        </section>

        {/* ================= LEGAL SECTIONS ================= */}
        <section className="bg-gray-100 py-20 px-10 text-sm text-gray-600">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div>
                <h3 className="font-semibold mb-2">Privacy</h3>
                <p>
                We respect your privacy and are committed to protecting your
                personal data through transparent policies and strong safeguards.
                </p>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Cookies</h3>
                <p>
                AekSec uses cookies to enhance user experience, analyze traffic,
                and improve platform performance.
                </p>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Help</h3>
                <p>
                Access documentation, FAQs, and customer support resources to get
                the most out of AekSec products.
                </p>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Terms & Conditions</h3>
                <p>
                By using AekSec services, you agree to our terms governing platform
                usage, security responsibilities, and service limitations.
                </p>
            </div>

            </div>
        </section>

        </main>


        <Footer/>

        </>
    );
  
}

