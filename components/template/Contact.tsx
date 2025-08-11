import { Mail, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Component() {
	return (
		<section
			id="contact"
			className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/30"
		>
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
					Get in <span className="text-purple-400">Touch</span>
				</h2>
				<p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
					Connect with me through social media or send me an email directly.
				</p>

				<div className="flex flex-wrap justify-center items-center gap-8">
					<Link
						href="mailto:andressavconrado@gmail.com"
						className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gray-800/50 transition-colors"
					>
						<div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
							<Mail className="h-6 w-6 text-purple-400" />
						</div>
						<span className="text-sm font-medium text-gray-300">Email</span>
					</Link>

					<Link
						href="https://linkedin.com/in/andressavcon"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gray-800/50 transition-colors"
					>
						<div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
							<Linkedin className="h-6 w-6 text-purple-400" />
						</div>
						<span className="text-sm font-medium text-gray-300">LinkedIn</span>
					</Link>

					<Link
						href="https://instagram.com/andressavcon"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gray-800/50 transition-colors"
					>
						<div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
							<Instagram className="h-6 w-6 text-purple-400" />
						</div>
						<span className="text-sm font-medium text-gray-300">Instagram</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
