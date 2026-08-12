import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-10 py-10">
        {/* Top Title */}
        <div className="mb-10">
          <p className="uppercase tracking-[6px] text-sm text-neutral-400">
            Contact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] h-[650px]">
              <img
                src="/images/contact-bg.jpg"
                alt="Contact"
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Content */}
              <div className="absolute bottom-12 left-10 right-10">
                <h1 className="text-6xl md:text-7xl font-serif leading-none">
                  Let's
                  <br />
                  Collaborate
                </h1>

                <p className="mt-6 text-neutral-300 max-w-md leading-8">
                  Have a project in mind or looking for a UX/UI Designer? I'd
                  love to hear about your ideas and help transform them into
                  meaningful digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="bg-[#151515] rounded-[30px] p-10 border border-white/10">
            <h2 className="text-3xl font-semibold mb-2">
              Tell me about your project
            </h2>

            <p className="text-neutral-400 mb-10">
              Fill in the details below and I'll get back to you.
            </p>

            <form className="space-y-8">
              {/* Name */}

              <div>
                <label className="block mb-3 text-neutral-400">Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition"
                />
              </div>

              {/* Email */}

              <label htmlFor="email" className="block mb-3 text-neutral-400">
                Email
              </label>

              <input id="email" type="email" placeholder="hello@email.com" />

              {/* Company */}

              <div>
                <label
                  htmlFor="company"
                  className="block mb-3 text-neutral-400">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition"
                />
              </div>

              {/* Budget */}

              <div>
                <label htmlFor="email" className="block mb-3 text-neutral-400">
                  Budget
                </label>

                <select className="w-full bg-transparent border-b border-white/20 py-3 outline-none">
                  <option className="bg-black">Select Budget</option>
                  <option className="bg-black">₹20k - ₹50k</option>
                  <option className="bg-black">₹50k - ₹1L</option>
                  <option className="bg-black">₹1L+</option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label className="block mb-3 text-neutral-400">Message</label>

                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none resize-none focus:border-white"
                />
              </div>

              {/* Button */}

              <button
                className="
                mt-4
                flex
                items-center
                gap-5
                border
                border-white/20
                rounded-full
                px-5
                py-4
                hover:border-white
                transition
                ">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="text-black" size={20} />
                </div>

                <span className="text-lg">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
