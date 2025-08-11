"use client";
import { useScroll, useTransform, Variants } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

import Background from "@/components/template/Background";
import Header from "@/components/template/Header";
import Hero from "@/components/template/Hero";
import About from "@/components/template/About";
import Skills from "@/components/template/Skills";
import Projects from "@/components/template/Projects";
import Contact from "@/components/template/Contact";
import Footer from "@/components/template/Footer";
import ButtonReturnToTop from "@/components/template/ButtonReturnToTop";

const fadeInUp: Variants = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Portfolio() {
	const [activeSection, setActiveSection] = useState("home");
	const { scrollY } = useScroll();

	const [maxScroll, setMaxScroll] = useState(0);

	// Estado para controlar visibilidade do botão "Voltar ao topo"
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		function updateMaxScroll() {
			setMaxScroll(document.body.scrollHeight - window.innerHeight);
		}
		updateMaxScroll();
		window.addEventListener("resize", updateMaxScroll);
		return () => window.removeEventListener("resize", updateMaxScroll);
	}, []);

	const headerOpacity = useTransform(scrollY, [0, maxScroll], [0.1, 0.5]);

	function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
		let timeout: NodeJS.Timeout;
		return (...args: Parameters<T>) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => func(...args), wait);
		};
	}

	const handleScroll = useCallback(() => {
		const sections = ["home", "about", "skills", "projects", "contact"];
		const scrollPosition = window.scrollY + 100;

		// Controla visibilidade do botão flutuante
		if (window.scrollY > 300) {
			setShowScrollTop(true);
		} else {
			setShowScrollTop(false);
		}

		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) {
				const { offsetTop, offsetHeight } = element;
				if (
					scrollPosition >= offsetTop &&
					scrollPosition < offsetTop + offsetHeight
				) {
					setActiveSection(section);
					break;
				}
			}
		}
	}, []);

	useEffect(() => {
		const debouncedHandleScroll = debounce(handleScroll, 100);
		window.addEventListener("scroll", debouncedHandleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", debouncedHandleScroll);
	}, [handleScroll]);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		} else {
			console.warn(`Section with id "${sectionId}" not found.`);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
				<Background />
				<Header
					activeSection={activeSection}
					headerOpacity={headerOpacity}
					scrollToSection={scrollToSection}
				/>
				<Hero fadeInUp={fadeInUp} scrollToSection={scrollToSection} />
				<About staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
				<Skills staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
				<Projects fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
				<Contact fadeInUp={fadeInUp} />
				<Footer />
			</div>

			{showScrollTop && <ButtonReturnToTop scrollToTop={scrollToTop} />}
		</>
	);
}
