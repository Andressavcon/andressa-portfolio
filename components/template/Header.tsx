import React from "react";
import { motion, MotionValue } from "framer-motion";

interface HeaderProps {
	activeSection: string;
	headerOpacity: MotionValue<number>;
	scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
	activeSection,
	headerOpacity,
	scrollToSection,
}) => {
	return (
		<motion.header
			className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-purple-500/20"
			style={{ backgroundColor: `rgba(17, 24, 39, ${headerOpacity.get()})` }}
		>
			<nav className="container mx-auto px-6 py-4 flex items-center justify-between">
				<div className="w-32" />

				<motion.div
					className="hidden md:flex space-x-8"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
						<button
							key={item}
							onClick={() => scrollToSection(item.toLowerCase())}
							className={`text-sm font-medium transition-colors hover:text-purple-400 ${
								activeSection === item.toLowerCase()
									? "text-purple-400"
									: "text-gray-300"
							}`}
							aria-current={
								activeSection === item.toLowerCase() ? "page" : undefined
							}
						>
							{item}
						</button>
					))}
				</motion.div>
			</nav>
		</motion.header>
	);
};

export default Header;
