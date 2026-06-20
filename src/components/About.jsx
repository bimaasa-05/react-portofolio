import {
	BsPersonBadge,
	BsGeoAlt,
	BsMortarboard,
	BsWindow,
	BsServer,
	BsDatabaseFill,
	BsGit,
} from "react-icons/bs";
import SkillCard from "./SkillCard";
import FadeIn from "./FadeIn";
const skillsData = [
	{
		icon: <BsWindow />,
		title: "Frontend",
		skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
	},
	{
		icon: <BsServer />,
		title: "Backend",
		skills: ["PHP Native", "Laravel"],
	},
	{
		icon: <BsDatabaseFill />,
		title: "Database",
		skills: ["MySQL"],
	},
	{
		icon: <BsGit />,
		title: "Version Control",
		skills: ["Git", "GitHub"],
	},
];

function About() {
	return (
		<section id="about" className="section about-section">
			<div className="container">
				<div className="row gy-5">
					<div className="col-lg-6">
						<FadeIn>
							<p className="eyebrow">
								<BsPersonBadge /> Tentang Saya
							</p>
							<h2 className="section-title">Mengenal Lebih Dekat</h2>
							<p className="about-text">
								Saya memiliki ketertarikan dalam pengembangan web dan terus
								belajar untuk meningkatkan kemampuan dalam membangun aplikasi
								yang efisien serta mudah digunakan. Saya terbiasa menggunakan
								PHP Native sebagai backend dan memanfaatkan HTML, CSS,
								JavaScript, serta Bootstrap untuk membangun antarmuka yang
								responsif.
							</p>
							<div className="about-meta">
								<div className="about-meta-item">
									<BsGeoAlt /> Berbasis di Indonesia
								</div>
								<div className="about-meta-item">
									<BsMortarboard /> Terus belajar &amp; berkembang
								</div>
							</div>
						</FadeIn>
					</div>

					<div className="col-lg-6">
						<div className="row g-4">
							{skillsData.map((item, index) => (
								<div className="col-sm-6" key={item.title}>
									<FadeIn delay={index * 100}>
										<SkillCard
											icon={item.icon}
											title={item.title}
											skills={item.skills}
										/>
									</FadeIn>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
