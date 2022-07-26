import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import TopBarIcons from "./TopBarIcons";
import './TopBar.css'
import { FiSearch } from "react-icons/fi";


const TopBar = ({ toggleBar }) => {
	return (
		<>
			<div className="TopBar_container">
				<div className="searchBar_icon TopBar_item">
					<div onClick={toggleBar} className="toggle_icon">
						<AiOutlineBars />
					</div>
					<div className="search-rel">
						<input type="search" name="search" id="searchBar" placeholder="Search for anything..." />
						<span className="search-icon">
							<FiSearch />
						</span>
					</div>
				</div>
				<div className="TopBar_item icons">
					<TopBarIcons />
				</div>
			</div>

		</>
	)
}

export default TopBar;