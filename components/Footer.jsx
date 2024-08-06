import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", name: "Home" },
  { href: "#explore", name: "Explore" },
  { href: "#about", name: "About" },
  { href: "#menu", name: "Menu" },
  { href: "#testimonials", name: "Testimonials" },
];

// icons
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* overlay */}
      <div className="absolute w-full h-full z-10 top-0 bg-black/[0.90]"></div>
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* logo */}
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>
          {/* nav */}
          <nav
            className="flex flex-col lg:flex-row gap-8 xl:gap-12 justify-center
                items-center"
          >
            {links?.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className="uppercase text-white tracking-widest hover:text-accent transition-all"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* social */}
          <ul className="flex text-white text-xl gap-4">
            <li>
              <Link
                href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"
                className="w-[54px] h-[54px] border border-white/[0.15] 
                    rounded-full flex items-center justify-center hover:text-white/70 transition-all"
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/?locale=es_LA' target="_blank" rel="noopener noreferrer"
                className="w-[54px] h-[54px] border border-white/[0.15] 
                    rounded-full flex items-center justify-center hover:text-white/70 transition-all"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href='https://twitter.com/home' target="_blank" rel="noopener noreferrer"
                className="w-[54px] h-[54px] border border-white/[0.15] 
                    rounded-full flex items-center justify-center hover:text-white/70 transition-all"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"
                className="w-[54px] h-[54px] border border-white/[0.15] 
                    rounded-full flex items-center justify-center hover:text-white/70 transition-all"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
          {/* copyright */}
          <div
            className="border-t border-white/10 text-[15px] text-white/70 
                font-light w-full flex items-center justify-center py-6"
          >
            <p> &#169; Copyright 2024 - Zenbrew. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
