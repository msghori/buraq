import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="w-full bg-[#1e1e1e] text-white fixed top-0 z-50">
      <nav className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        {/* Left Links */}
        <ul className="hidden md:flex space-x-6 font-regular">
          <li>
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#home');
                }
              }}
              className="hover:text-[#ed9127] hover:bg-white px-3 py-1 rounded-full cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#about');
                }
              }}
              className="hover:text-[#ed9127] hover:bg-white px-3 py-1 rounded-full cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#opportunity');
                }
              }}
              className="hover:text-[#ed9127] hover:bg-white px-3 py-1 rounded-full cursor-pointer"
            >
              Opportunity
            </button>
          </li>
        </ul>

        {/* Logo */}
        <div className="text-2xl font-bold">
          <button onClick={() => navigate('/')}>
            <img
              src={`${import.meta.env.BASE_URL}images/${"logo-header.webp"}`}
              alt="Logo"
              className="h-10 md:h-15 w-auto"
            />
          </button>
        </div>

        {/* Right Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#divisions');
                }
              }}
              className="hover:text-[#ed9127] hover:bg-white px-3 py-1 rounded-full cursor-pointer"
            >
              Divisions
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/leaders')}
              className="hover:text-[#ed9127] hover:bg-white px-3 py-1 rounded-full cursor-pointer"
            >
              Leaders
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-[#ed9127] hover:bg-white px-3 py-1 rounded-full cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black-100 py-4 px-4 space-y-3">
          <button
            onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#home');
              }
              setOpen(false);
            }}
            className="block font-medium text-left cursor-pointer w-full py-2"
          >
            Home
          </button>
          <button
            onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#about');
              }
              setOpen(false);
            }}
            className="block font-medium text-left cursor-pointer w-full py-2"
          >
            About
          </button>
          <button
            onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#opportunity');
              }
              setOpen(false);
            }}
            className="block font-medium text-left cursor-pointer w-full py-2"
          >
            Opportunity
          </button>
          <button
            onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#divisions');
              }
              setOpen(false);
            }}
            className="block font-medium text-left cursor-pointer w-full py-2"
          >
            Divisions
          </button>
          <button
            onClick={() => {
              navigate('/leaders');
              setOpen(false);
            }}
            className="block font-medium text-left cursor-pointer w-full py-2"
          >
            Leaders
          </button>
          <button
            onClick={() => {
              navigate('/contact');
              setOpen(false);
            }}
            className="block font-medium text-left cursor-pointer w-full py-2"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
