import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer id="footer" className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kora Roots" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-xl font-semibold">Kora Roots</span>
            </div>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Premium Indian snacks rooted in tradition, crafted for the modern
              health-conscious consumer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {["Home", "Shop", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 font-body text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@koraroots.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-background/40">
            © 2026 Kora Roots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
