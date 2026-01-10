"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "./_ui/card";
import { Button } from "./_ui/button";
import { Input } from "./_ui/input";
import { Textarea } from "./_ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission → open email client
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // CHANGE THIS TO YOUR REAL EMAIL
    const mailToLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;

    window.location.href = mailToLink;
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:Chidozinnam@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/shazzark", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chidozie-nnam-933375258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/DOZIEBUILDS",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Get In Touch
          </h2>

          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <p className="text-center text-muted-foreground">
                  Have a project in mind or want to collaborate? Send me an
                  email.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Chidozie Nnam"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>

                {/* Social Links */}
                <div className="mt-8 border-t border-border pt-8">
                  <p className="mb-4 text-center text-sm text-muted-foreground">
                    Or connect with me on:
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
