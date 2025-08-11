import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

interface ContactProps {
	fadeInUp: Variants;
}

const Contact: React.FC<ContactProps> = ({ fadeInUp }) => {
	return (
		<section
			id="contact"
			className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/30"
		>
			<div className="max-w-4xl mx-auto text-center">
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					Get in <span className="text-purple-400">Touch</span>
				</motion.h2>

				<motion.p
					className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					Connect with me through social media or send me an email directly.
				</motion.p>

				<motion.div
					className="flex flex-col sm:flex-row items-center justify-center gap-6"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<a
						href="mailto:andressavconrado@gmail.com"
						className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
					>
						<Mail className="w-5 h-5" />
						Email
					</a>

					<a
						href="https://www.linkedin.com/in/andressavcon/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
					>
						<Linkedin className="w-5 h-5" />
						LinkedIn
					</a>

					<a
						href="https://www.instagram.com/andressavcon"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:from-[#e57522] hover:via-[#c32675] hover:to-[#6f2f94] text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
					>
						<Instagram className="w-5 h-5" />
						Instagram
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
