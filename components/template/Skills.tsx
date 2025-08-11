import React from "react";
import { motion, Variants } from "framer-motion";
import {
	Code,
	Database,
	GitBranch,
	Globe,
	Layers,
	LucideIcon,
	Server,
} from "lucide-react";

interface ISkills {
	name: string;
	icon: LucideIcon;
	color: string;
}

const skillIcons: ISkills[] = [
	{ name: "Java", icon: Code, color: "text-orange-400" },
	{ name: "Spring Boot", icon: Layers, color: "text-green-400" },
	{ name: "C#", icon: Code, color: "text-purple-400" },
	{ name: "TypeScript", icon: Code, color: "text-blue-400" },
	{ name: "JavaScript", icon: Code, color: "text-yellow-400" },
	{ name: "React", icon: Globe, color: "text-cyan-400" },
	{ name: "Next.js", icon: Globe, color: "text-gray-300" },
	{ name: "Node.js", icon: Server, color: "text-green-500" },
	{ name: "PostgreSQL", icon: Database, color: "text-blue-500" },
	{ name: "MongoDB", icon: Database, color: "text-green-600" },
	{ name: "Git", icon: GitBranch, color: "text-orange-500" },
	{ name: "HTML5 & CSS3", icon: Code, color: "text-red-400" },
];

interface SkillsProps {
	staggerContainer: Variants;
	fadeInUp: Variants;
}

const Skills: React.FC<SkillsProps> = ({ staggerContainer, fadeInUp }) => {
	return (
		<section id="skills" className="py-20 px-6">
			<div className="container mx-auto">
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					My <span className="text-purple-400">Skills</span>
				</motion.h2>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
					variants={staggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					{skillIcons.map((skill) => (
						<motion.div
							key={skill.name}
							variants={fadeInUp}
							whileHover={{ scale: 1.1, y: -5 }}
							className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
						>
							<skill.icon
								className={`w-12 h-12 mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
							/>
							<span className="text-gray-300 font-medium text-center">
								{skill.name}
							</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
