import React from "react";
import { BiMoon } from "react-icons/bi";
import { BsFullscreenExit } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { FiSettings } from "react-icons/fi";

const TopBarIcons = () => {
	const TopBarIcons = [
		{ icons: <BiMoon /> },
		{ icons: <BsFullscreenExit /> },
		{ icons: <BiBell /> },
		{ icons: <BsChatLeft /> },
		{ icons: "https://spruko.com/demo/zanex/zanex/assets/images/users/8.jpg" },
		{ icons: <GoThreeBars /> },
		{ icons: <FiSettings /> },

	]
	return (
		<>
			<div className="TopBarIcons_container">
				{TopBarIcons.map((item, index) => {
					if (index === 4) {
						return (
							<>
								<span className="topBarImgConatiner">
									<img src={item.icons} />
								</span>
							</>
						)
					} else {
						return <span className= {`${index === 6 ? 'degree' : ''}`}>{item.icons}</span>
					}
				})}
			</div>
		</>
	)
}


export default TopBarIcons;