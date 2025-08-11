import React from "react";

const Footer = () => {
	return (
		<footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
			<p>
				© {new Date().getFullYear()} Andressa Vargas Conrado. All rights
				reserved.
			</p>
		</footer>
	);
};

export default Footer;
