import React from "react";
import { Code } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface AboutProps {
	staggerContainer: Variants;
	fadeInUp: Variants;
}

const About: React.FC<AboutProps> = ({ staggerContainer, fadeInUp }) => {
	return (
		<section id="about" className="py-20 px-6">
			<div className="container mx-auto">
				<motion.div
					className="grid md:grid-cols-2 gap-12 items-center"
					variants={staggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<motion.div
						variants={fadeInUp}
						initial="initial"
						whileInView="animate"
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							About <span className="text-purple-400">Me</span>
						</h2>
						<p className="text-gray-300 text-lg leading-relaxed mb-6">
							Fullstack developer with practical experience in projects from
							prototyping to full deployment, working with technologies such as
							React, Next.js, Java (Spring Boot), MongoDB, PostgreSQL, and C#
							for desktop applications.
						</p>
						<p className="text-gray-300 text-lg leading-relaxed mb-6">
							Background includes training through bootcamps and development
							tracks that strengthened both frontend and backend skills, as well
							as experience with Angular, Node.js, TypeScript, and Linux.
						</p>
						<p className="text-gray-300 text-lg leading-relaxed">
							Always learning and aiming to contribute to projects with clean,
							maintainable, and high-quality code.
						</p>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						initial="initial"
						whileInView="animate"
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex justify-center"
					>
						<div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
							<Code className="w-32 h-32 text-purple-400" />
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
