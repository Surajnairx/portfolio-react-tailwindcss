import {
  Instagram,
  LinkedinIcon,
  Mail,
  Send,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-15 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center mb-12 max-w-xl mx-auto">
          Have a project in mind or want to colaborate? Feel free to reach out.
          I'm always open to discussing new opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex space-y-6 justify-center gap-10 text-primary">
              <div className="flex gap-10">
                <a href="mailto:surajnair9698@gmail.com">
                  <Mail />
                </a>
                <a href="">
                  <LinkedinIcon />
                </a>
                <a href="">
                  <TwitterIcon />
                </a>
                <a href="">
                  <Instagram />
                </a>
                <a href="">
                  <TwitchIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="name">Your Messaage</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello there, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                className={`cosmic-button w-full flex items-center justify-center gap-2`}
              >
                Send
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    // <section id="contact" className="py-20 px-4 relative">
    //   <div className="container mx-auto max-w-5xl">
    //     {/* Heading */}
    //     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
    //       Get In <span className="text-primary">Touch</span>
    //     </h2>

    //     <p className="text-center mb-14 max-w-xl mx-auto text-muted-foreground">
    //       Have a project in mind or want to collaborate? Feel free to reach out.
    //       I’m always open to discussing new opportunities.
    //     </p>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    //       {/* Left: Socials */}
    //       <div className="space-y-8">
    //         <h3 className="text-2xl font-semibold text-center md:text-left">
    //           Connect With Me
    //         </h3>

    //         <div className="flex justify-center md:justify-start">
    //           <div className="flex gap-8 text-primary">
    //             <a
    //               href="mailto:surajnair9698@gmail.com"
    //               className="hover:scale-110 transition-transform"
    //               aria-label="Email"
    //             >
    //               <Mail />
    //             </a>
    //             <a
    //               href=""
    //               className="hover:scale-110 transition-transform"
    //               aria-label="LinkedIn"
    //             >
    //               <LinkedinIcon />
    //             </a>
    //             <a
    //               href=""
    //               className="hover:scale-110 transition-transform"
    //               aria-label="Twitter"
    //             >
    //               <TwitterIcon />
    //             </a>
    //             <a
    //               href=""
    //               className="hover:scale-110 transition-transform"
    //               aria-label="Instagram"
    //             >
    //               <Instagram />
    //             </a>
    //             <a
    //               href=""
    //               className="hover:scale-110 transition-transform"
    //               aria-label="Twitch"
    //             >
    //               <TwitchIcon />
    //             </a>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right: Form */}
    //       <div className="bg-card p-8 rounded-xl shadow-xs border border-border">
    //         <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

    //         <form className="space-y-6">
    //           <div className="space-y-2">
    //             <label htmlFor="name" className="text-sm font-medium">
    //               Your Name
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               required
    //               placeholder="John Doe"
    //               className="w-full px-4 py-3 rounded-md border border-input bg-background
    //                      focus:outline-hidden focus:ring-2 focus:ring-primary
    //                      transition"
    //             />
    //           </div>

    //           <div className="space-y-2">
    //             <label htmlFor="email" className="text-sm font-medium">
    //               Your Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               name="email"
    //               required
    //               placeholder="john@gmail.com"
    //               className="w-full px-4 py-3 rounded-md border border-input bg-background
    //                      focus:outline-hidden focus:ring-2 focus:ring-primary
    //                      transition"
    //             />
    //           </div>

    //           <div className="space-y-2">
    //             <label htmlFor="message" className="text-sm font-medium">
    //               Your Message
    //             </label>
    //             <textarea
    //               id="message"
    //               name="message"
    //               required
    //               rows={4}
    //               placeholder="Hello there, I'd like to talk about..."
    //               className="w-full px-4 py-3 rounded-md border border-input bg-background
    //                      focus:outline-hidden focus:ring-2 focus:ring-primary
    //                      resize-none transition"
    //             />
    //           </div>

    //           <button
    //             type="submit"
    //             className="cosmic-button w-full flex items-center justify-center gap-2
    //                    hover:scale-[1.02] active:scale-[0.98] transition"
    //           >
    //             Send
    //             <Send size={16} />
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Contact;
