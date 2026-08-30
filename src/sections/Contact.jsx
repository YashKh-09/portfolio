import { useState, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../components/ui/Toast";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com/notebookyash",
    handle: "github.com/notebookyash",
    icon: FaGithub,
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/notebook.yash",
    handle: "@notebook.yash",
    icon: FaInstagram,
  },
  {
    platform: "Email",
    url: "mailto:yashkh.dev@gmail.com",
    handle: "yashkh.dev@gmail.com",
    icon: FaEnvelope,
  },
];

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const validate = useCallback(() => {
    const newErrors = {};
    const { user_name, user_email, message } = formData;

    if (!user_name.trim() || user_name.trim().length < 2) {
      newErrors.user_name = "Name must be at least 2 characters";
    }

    if (
      !user_email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)
    ) {
      newErrors.user_email = "Please enter a valid email address";
    }

    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setToast({
        message: "Please fix the errors in the form",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });

        setErrors({});

        setToast({
          message: "Message sent successfully! I'll get back to you soon.",
          type: "success",
        });
      }
    } catch (error) {
      console.error("Email error:", error);

      setToast({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = (field) =>
    `w-full bg-transparent border p-3 text-[#f0f0f0] text-sm transition-colors focus:outline-none ${
      errors[field]
        ? "border-[#b8a58b]"
        : "border-[#3a3a3a] focus:border-[#6d8a7d]"
    }`;

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section id="contact" className="py-20 md:py-24 border-t border-border">
        <div className="container-custom">
          <div className="mb-12 md:mb-16">
            <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-tighter text-accent opacity-90">
              Contact_
            </h2>

            <div className="w-12 md:w-16 h-px bg-accent opacity-50 mt-4" />
          </div>

          <p className="max-w-2xl mb-10 text-[clamp(1rem,3vw,1.2rem)] text-muted leading-relaxed">
            Want to collaborate, ask a question, or just say hi? Drop a message
            or find me on social media.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Name <span className="text-accent">*</span>
                  </label>

                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className={inputClasses("user_name")}
                    placeholder="Your name"
                    disabled={loading}
                  />

                  {errors.user_name && (
                    <p className="text-xs text-accent mt-1">
                      {errors.user_name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Email <span className="text-accent">*</span>
                  </label>

                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className={inputClasses("user_email")}
                    placeholder="your.email@example.com"
                    disabled={loading}
                  />

                  {errors.user_email && (
                    <p className="text-xs text-accent mt-1">
                      {errors.user_email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Message <span className="text-accent">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses("message")} resize-vertical`}
                    placeholder="Tell me about your project or just say hi..."
                    disabled={loading}
                  />

                  {errors.message && (
                    <p className="text-xs text-accent mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 border text-sm font-medium tracking-wide transition-all duration-300 w-full sm:w-auto ${
                    loading
                      ? "opacity-50 cursor-not-allowed border-border text-muted"
                      : "border-accent text-accent hover:bg-accent hover:text-bg"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">&#9696;</span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-['Archivo'] text-lg md:text-xl font-bold mb-6 text-accent opacity-80">
                Find Me Online_
              </h3>

              <div className="space-y-4 mb-8">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <div key={link.platform} className="group">
                      <span className="text-sm text-muted block mb-1">
                        {link.platform}
                      </span>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md text-text hover:text-green transition-colors flex items-center gap-2"
                      >
                        <span className="text-accent opacity-50 group-hover:opacity-100 transition-opacity">
                          <Icon />
                        </span>

                        {link.handle}
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm italic text-muted leading-relaxed">
                  I'm always open to new connections and conversations. Feel
                  free to reach out anytime!
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                  </span>

                  <span className="text-xs text-muted">
                    Usually responds within a day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}