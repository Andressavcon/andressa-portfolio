import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface IProject {
	title: string;
	description: string;
	image: string;
	tech: string[];
	github?: string;
	link?: string;
}

const projects: IProject[] = [
	{
		title: "Super Mario Simple Game",
		description:
			"A simple Super Mario game built following a beginner-friendly JavaScript and HTML tutorial.",
		image: "/super-mario.png",
		tech: ["JavaScript", "HTML", "CSS"],
		github: "https://github.com/Andressavcon/super-mario",
		link: "https://andressavcon.github.io/super-mario/",
	},
	{
		title: "Pet Social Network",
		description:
			"A social network for animals developed with React, JavaScript, HTML, and CSS.",
		image: "/dogs.png",
		tech: ["React", "JavaScript", "HTML", "CSS"],
		github: "https://github.com/Andressavcon/dogs",
		link: "https://dogsdogs.netlify.app/",
	},
	{
		title: "Cafeteria Artesanal - Aroma & Sabor",
		description:
			"Artisanal coffee shop webpage built in Fullstack training with HTML, CSS, and JavaScript.",
		image: "/cafeteria.png",
		tech: ["HTML", "CSS", "JavaScript"],
		github: "https://github.com/Andressavcon/cafeteria",
		link: "https://andressavcon.github.io/cafeteria/",
	},
];

interface ProjectsProps {
	fadeInUp: Variants;
	staggerContainer: Variants;
}

const Projects: React.FC<ProjectsProps> = ({ fadeInUp, staggerContainer }) => {
	return (
		<section id="projects" className="py-20 px-6">
			<div className="container mx-auto">
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					Featured <span className="text-purple-400">Projects</span>
				</motion.h2>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={staggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					{projects.map((project) => (
						<motion.div
							key={project.title}
							variants={fadeInUp}
							whileHover={{ y: -10, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
								<div className="relative overflow-hidden h-48">
									<Image
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, 33vw"
										className="object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold text-white mb-3">
										{project.title}
									</h3>
									<p className="text-gray-300 mb-4 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-4">
										<Button
											variant="outline"
											className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 group bg-transparent"
											onClick={() =>
												window.open(
													project.github,
													"_blank",
													"noopener,noreferrer"
												)
											}
											aria-label={`View ${project.title} on GitHub`}
										>
											<Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
											View on GitHub
											<ExternalLink className="ml-2 h-4 w-4" />
										</Button>
										{project.link && (
											<Button
												variant="outline"
												className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 group bg-transparent"
												onClick={() =>
													window.open(
														project.link,
														"_blank",
														"noopener,noreferrer"
													)
												}
												aria-label={`Visit live site of ${project.title}`}
											>
												<ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
												Visit Site
											</Button>
										)}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
