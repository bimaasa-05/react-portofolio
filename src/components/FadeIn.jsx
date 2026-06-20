import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0 }) {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`fade-up ${isVisible ? "is-visible" : ""}`}
			style={{ transitionDelay: `${delay}ms` }}>
			{children}
		</div>
	);
}

export default FadeIn;
