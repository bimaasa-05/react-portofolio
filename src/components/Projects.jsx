import { BsKanban, BsBoxSeam, BsCashCoin, BsNewspaper } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";
const projectsData = [
	{
		title: "Inventaris App",
		description:
			"Aplikasi inventaris sederhana berbasis PHP Native yang digunakan untuk mengelola data barang, peminjaman, dan pengembalian barang secara efisien.",
		tags: ["PHP Native", "MySQL", "Bootstrap"],
		link: "https://github.com/bimaasa-05/inventaris-app",
		icon: <BsBoxSeam />,
		coverClass: "cover-1",
	},
	{
		title: "Aplikasi Kasir",
		description:
			"Aplikasi kasir sederhana berbasis PHP Native yang membantu proses transaksi penjualan dan pengelolaan data produk.",
		tags: ["PHP Native", "MySQL", "Bootstrap"],
		link: "https://github.com/bimaasa-05/kasir",
		icon: <BsCashCoin />,
		coverClass: "cover-2",
	},
	{
		title: "Portal Berita",
		description:
			"Website portal berita modern yang dikembangkan untuk menampilkan berita secara dinamis dan responsif.",
		tags: ["PHP Native", "MySQL", "Bootstrap"],
		link: "https://github.com/bimaasa-05/web-berita",
		icon: <BsNewspaper />,
		coverClass: "cover-3",
	},
];

function Projects() {
	return (
		<section id="projects" className="section projects-section">
			<div className="container">
				<div className="text-center">
					<p className="eyebrow justify-content-center">
						<BsKanban /> Proyek
					</p>
					<h2 className="section-title">Beberapa Project yang Telah Dibuat</h2>
					<p className="section-subtitle">
						Sebagian project yang pernah saya kembangkan menggunakan PHP Native
						dan Bootstrap.
					</p>
				</div>

				<div className="row g-4 mt-3">
					{projectsData.map((project, index) => (
						<div className="col-md-6 col-lg-4" key={project.title}>
							<FadeIn delay={index * 100}>
								<ProjectCard {...project} />
							</FadeIn>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
