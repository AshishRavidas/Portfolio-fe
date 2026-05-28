import React, { useState } from 'react';
import Section from './Section';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import useInView from '../hooks/useInView';

const FloatingField = ({ label, name, type = 'text', value, onChange, required, multiline, rows }) => {
  const [focused, setFocused] = useState(false);
  const raised = focused || value.length > 0;

  const commonProps = {
    id: name,
    name,
    value,
    onChange,
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: `peer w-full px-4 pt-6 pb-2.5 text-charcoal bg-cream border rounded-xl focus:outline-none transition-all duration-200 text-sm ${
      focused
        ? 'border-warm-brown ring-1 ring-warm-brown/20'
        : 'border-warm-border hover:border-taupe/60'
    }`,
  };

  return (
    <div className="relative">
      {multiline ? (
        <textarea {...commonProps} rows={rows || 5} style={{ resize: 'none' }} />
      ) : (
        <input {...commonProps} type={type} />
      )}
      <label
        htmlFor={name}
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${
          raised
            ? 'top-2 text-[11px] font-medium text-warm-brown'
            : 'top-4 text-sm text-warm-gray'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={14} />,
      label: 'Email',
      value: 'ashishravidas2204@gmail.com',
      href: 'mailto:ashishravidas2204@gmail.com',
    },
    {
      icon: <FaPhone size={14} />,
      label: 'Phone',
      value: '+91 7992356995',
      href: 'tel:+917992356995',
    },
    {
      icon: <FaMapMarkerAlt size={14} />,
      label: 'Location',
      value: 'Gurgaon, Haryana',
      href: null,
    },
  ];

  const socialLinks = [
    { href: 'https://github.com/AshishRavidas', icon: <FaGithub size={15} />, label: 'GitHub' },
    {
      href: 'https://www.linkedin.com/in/ashish-ravidas-34848a215',
      icon: <FaLinkedin size={15} />,
      label: 'LinkedIn',
    },
  ];

  return (
    <Section id="contact" title="Get in Touch" className="bg-beige">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Left */}
        <div className={`reveal-left ${inView ? 'visible' : ''}`}>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            I'm open to new opportunities and always happy to connect — whether it's about a role, a project, or just a chat about tech.
          </p>

          <div className="space-y-4 mb-8">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-cream border border-warm-border flex items-center justify-center text-warm-brown group-hover:bg-warm-border transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-warm-gray uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-charcoal hover:text-warm-brown transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-charcoal">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-cream border border-warm-border flex items-center justify-center text-text-secondary hover:text-charcoal hover:bg-warm-border hover:border-taupe/60 transition-all duration-200 hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div
          className={`reveal-right ${inView ? 'visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-cream rounded-2xl p-7 border border-warm-border shadow-warm-sm space-y-4"
          >
            <FloatingField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FloatingField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FloatingField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={5}
            />

            <button
              type="submit"
              className="w-full gradient-warm py-3.5 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-warm-md active:scale-[0.98]"
            >
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
