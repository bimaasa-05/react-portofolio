import { useState } from "react";
import {
	BsChatDots,
	BsEnvelope,
	BsGithub,
	BsLinkedin,
	BsSend,
} from "react-icons/bs";
import FadeIn from "./FadeIn";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const subject = encodeURIComponent(
			`Pesan dari Portfolio - ${formData.name}`,
		);
		const body = encodeURIComponent(
			`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`,
		);

		window.location.href = `mailto:rizqons99@gmail.com?subject=${subject}&body=${body}`;

		setSubmitted(true);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<section id="contact" className="section contact-section">
			<div className="container">
				<div className="row g-5">
					<div className="col-lg-6">
						<FadeIn>
							<p className="eyebrow">
								<BsChatDots /> Kontak
							</p>
							<h2 className="section-title">Mari Terhubung</h2>
							<p className="section-subtitle">
								Punya project atau ingin berdiskusi? Kirim pesan melalui form,
								atau hubungi saya langsung lewat kanal di bawah ini.
							</p>

							<div className="contact-list">
								<a href="mailto:rizqons99@gmail.com" className="contact-item">
									<span className="contact-icon">
										<BsEnvelope />
									</span>
									<span>
										<small>Email</small>
										rizqons99@gmail.com
									</span>
								</a>
								<a
									href="https://github.com/bimaasa-05"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-item">
									<span className="contact-icon">
										<BsGithub />
									</span>
									<span>
										<small>GitHub</small>
										github.com/bimaasa-05
									</span>
								</a>
								<a
									href="https://www.linkedin.com/in/cahya-rizqon-a5a532390/"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-item">
									<span className="contact-icon">
										<BsLinkedin />
									</span>
									<span>
										<small>LinkedIn</small>
										Cahya Rizqon
									</span>
								</a>
							</div>
						</FadeIn>
					</div>

					<div className="col-lg-6">
						<form className="contact-form" onSubmit={handleSubmit}>
							<FadeIn delay={150}>
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="formName"
										name="name"
										placeholder="Nama"
										value={formData.name}
										onChange={handleChange}
										required
									/>
									<label htmlFor="formName">Nama</label>
								</div>

								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="formEmail"
										name="email"
										placeholder="Email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
									<label htmlFor="formEmail">Email</label>
								</div>

								<div className="form-floating mb-3">
									<textarea
										className="form-control"
										id="formMessage"
										name="message"
										placeholder="Pesan"
										style={{ height: "140px" }}
										value={formData.message}
										onChange={handleChange}
										required></textarea>
									<label htmlFor="formMessage">Pesan</label>
								</div>

								<button type="submit" className="btn btn-primary-ocean w-100">
									Kirim Pesan <BsSend />
								</button>

								{submitted && (
									<div className="form-success show">
										Pesan berhasil disiapkan! Klien email Anda akan terbuka
										untuk mengirimkannya.
									</div>
								)}
							</FadeIn>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
