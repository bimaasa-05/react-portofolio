import { BsGithub } from "react-icons/bs";

function ProjectCard({ title, description, tags, link, icon, coverClass }) {
	return (
		<div className="project-card">
			<div className={`project-cover ${coverClass}`}>{icon}</div>
			<div className="project-body">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="project-tags">
					{tags.map((tag) => (
						<span className="chip chip-sm" key={tag}>
							{tag}
						</span>
					))}
				</div>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-project">
					<BsGithub /> GitHub
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
