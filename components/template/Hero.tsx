import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

interface HeroProps {
	fadeInUp: Variants;
	scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, fadeInUp }) => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center px-6 pt-20"
		>
			<div className="container mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="mb-8"
				>
					<div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl relative">
						<Image
							src="/hero-img.jpg"
							alt="Andressa V Conrado"
							fill
							sizes="160px"
							className="object-cover"
						/>
					</div>
				</motion.div>

				<motion.h1
					className="text-5xl md:text-7xl font-bold text-white mb-6"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					Hi, I'm
					<span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
						Andressa!
					</span>
				</motion.h1>

				<motion.p
					className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
					transition={{ delay: 0.4, duration: 0.6 }}
				>
					Fullstack developer with experience in end-to-end projects, from
					prototyping to deployment. Continuously learning to deliver consistent
					results.
				</motion.p>

				<motion.div
					className="flex flex-col sm:flex-row gap-4 justify-center"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					<Button
						size="lg"
						className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
						onClick={() =>
							window.open(
								"https://github.com/Andressavcon",
								"_blank",
								"noopener,noreferrer"
							)
						}
					>
						<Github className="mr-2 h-5 w-5" />
						GitHub
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
						onClick={() => scrollToSection("contact")}
					>
						Contact Me
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
