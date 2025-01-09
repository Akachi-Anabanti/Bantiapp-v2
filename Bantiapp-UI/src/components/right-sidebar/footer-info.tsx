import { Link } from "react-router-dom";

export default function FooterInfo() {
  const footerLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
  ];

  return (
    <footer className="py-4">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link key={link} to={{ pathname: "" }} className="hover:underline">
              {link}
            </Link>
          ))}
          <p className="">&copy; {new Date().getFullYear()} Banti Inc.</p>
        </nav>
      </div>
    </footer>
  );
}
