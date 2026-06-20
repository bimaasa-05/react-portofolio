import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "Tentang" },
	{ id: "projects", label: "Proyek" },
	{ id: "contact", label: "Kontak" },
];

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const closeMenu = () => setMenuOpen(false);

	return (
		<nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
			<div className="nav-container">
				<a href="#home" className="nav-brand" onClick={closeMenu}>
					<span className="brand-mark">C</span>
					<span className="brand-text">Cahya Rizqon</span>
				</a>

				<button
					className="nav-toggle"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Buka menu navigasi">
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>

				<ul className={`nav-links ${menuOpen ? "open" : ""}`}>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`} onClick={closeMenu}>
								{link.label}
							</a>
						</li>
					))}
					<li>
						<a href="#contact" className="nav-cta" onClick={closeMenu}>
							Hubungi Saya
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
