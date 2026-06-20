function SkillCard({ icon, title, skills }) {
	return (
		<div className="skill-card">
			<div className="skill-icon">{icon}</div>
			<h3>{title}</h3>
			<div className="skill-chips">
				{skills.map((skill) => (
					<span className="chip" key={skill}>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}

export default SkillCard;
