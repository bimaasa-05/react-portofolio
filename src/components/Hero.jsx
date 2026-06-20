import FadeIn from "./FadeIn";
import {
	BsHandIndexThumb,
	BsArrowDownRight,
	BsFiletypePhp,
	BsDatabase,
	BsBootstrapFill,
	BsChevronDown,
} from "react-icons/bs";
import { SiLaravel } from "react-icons/si";
import profileImg from "../assets/profile.jpeg";

function Hero() {
	return (
		<section id="home" className="section hero-section">
			<div className="hero-blob hero-blob-1" aria-hidden="true"></div>
			<div className="hero-blob hero-blob-2" aria-hidden="true"></div>

			<div className="container">
				<div className="row align-items-center gy-5">
					<div className="col-lg-6 order-lg-1 order-2">
						<FadeIn>
							<p className="eyebrow">
								<BsHandIndexThumb /> Halo, selamat datang
							</p>
							<h1 className="hero-name">Cahya Rizqon</h1>
							<h2 className="hero-heading">Web Developer</h2>
							<p className="hero-desc">
								Saya merupakan seorang developer yang fokus pada pengembangan
								website menggunakan PHP Native, Laravel, HTML, CSS, JavaScript,
								dan Bootstrap. Saya senang membangun aplikasi yang sederhana,
								cepat, dan mudah digunakan.
							</p>

							<div className="d-flex flex-wrap gap-3 hero-buttons">
								<a href="#projects" className="btn btn-primary-ocean">
									Lihat Project <BsArrowDownRight />
								</a>
								<a href="#contact" className="btn btn-outline-ocean">
									Hubungi Saya
								</a>
							</div>

							<div className="terminal-status">
								<span className="terminal-dot"></span>
								<span className="terminal-text">
									status -- Online<span className="terminal-cursor">|</span>
								</span>
							</div>
						</FadeIn>
					</div>

					<div className="col-lg-6 order-lg-2 order-1">
						<FadeIn delay={150}>
							<div className="browser-mock-wrap">
								<div className="browser-mock">
									<div className="browser-mock-bar">
										<span className="browser-dot dot-red"></span>
										<span className="browser-dot dot-yellow"></span>
										<span className="browser-dot dot-green"></span>
										<span className="browser-url">Cahya.dev</span>
									</div>
									<div className="browser-mock-body">
										<div className="profile-frame">
											<div className="profile-fallback">C</div>
											<img
												src={profileImg}
												alt="Foto Profil Cahya Rizqon"
												className="profile-photo"
											/>
										</div>
									</div>
								</div>

								<div className="float-badge badge-php">
									<BsFiletypePhp /> PHP
								</div>
								<div className="float-badge badge-mysql">
									<BsDatabase /> MySQL
								</div>
								<div className="float-badge badge-bootstrap">
									<BsBootstrapFill /> Bootstrap
								</div>
								<div className="float-badge badge-laravel">
									<SiLaravel /> Laravel
								</div>
							</div>
						</FadeIn>
					</div>
				</div>
			</div>

			<a href="#about" className="scroll-cue" aria-label="Gulir ke bawah">
				<span>Scroll</span>
				<BsChevronDown />
			</a>
		</section>
	);
}

export default Hero;
