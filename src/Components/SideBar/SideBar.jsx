import React from "react";
import '../SideBar/Sidebar.css'
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineWidgets } from "react-icons/md";
import { VscFile } from "react-icons/vsc";
import { FiDatabase, FiPackage, FiLayers, FiPieChart } from "react-icons/fi";
import { BsClipboard } from "react-icons/bs";

const SideBar = ({ funName, value1 }) => {
	const SiderBarData = [
		{
			listName: 'Dashboard',
			listNameIcon: <BiHomeAlt />
		},
		{
			listName: 'Widgets',
			listNameIcon: <MdOutlineWidgets />
		},
		{
			listName: 'Components',
			listNameIcon: <FiDatabase />
		},
		{
			listName: 'Elements',
			listNameIcon: <FiPackage />
		},
		{
			listName: 'Advanced Elements',
			listNameIcon: <VscFile />
		},
		{
			listName: 'Charts',
			listNameIcon: <FiPieChart />
		},
		{
			listName: 'Tables',
			listNameIcon: <BsClipboard />
		},
		{
			listName: 'Pages',
			listNameIcon: <FiLayers />
		}

	]
	return (
		<>
			<div className="logo"> 
					<img src="https://spruko.com/demo/zanex/zanex/assets/images/brand/logo-3.png" style={{ display: value1 ? "none" : "block" }} />
					<img src="https://spruko.com/demo/zanex/zanex/assets/images/brand/logo-2.png" style={{ display: value1 ? "block" : "none" }} />
			</div>
			<div className="sideBar_items">
				<div className="siderBar_item_list">
					{SiderBarData.map((item) => {
						return (
							<>
								<div className="Sidebar_links">
									<div className="icons">{item.listNameIcon}</div>
									<div className="listName_item" style={{ opacity: value1 ? "0" : "1" }}>{item.listName}</div>
								</div>
							</>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default SideBar;