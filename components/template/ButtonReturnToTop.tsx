import React from "react";

interface ButtonReturnToTopProps {
	scrollToTop: () => void;
}

const ButtonReturnToTop: React.FC<ButtonReturnToTopProps> = ({
	scrollToTop,
}) => {
	return (
		<button
			onClick={scrollToTop}
			aria-label="Voltar ao topo"
			className="
    fixed bottom-6 right-6
    w-12 h-12
    rounded-full
    bg-white bg-opacity-10
    backdrop-blur-md
    border border-white border-opacity-40
    text-white
    shadow-md
    cursor-pointer
    transition
    hover:bg-white hover:bg-opacity-20
    flex items-center justify-center
  "
			style={{ zIndex: 1000 }}
		>
			↑
		</button>
	);
};

export default ButtonReturnToTop;
