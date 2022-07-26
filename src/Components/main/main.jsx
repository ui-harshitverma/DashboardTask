import React from "react";
import Content from "../Content/Content";
import TopBar from "../TopBar/TopBar";
import './main.css'

const Main = ({toggleBar1}) => {
	return (
		<>
			  <TopBar  toggleBar={toggleBar1} />
			  <div className="content_container">
				<Content />
			  </div>
		</>
	)
}

export default Main;