import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import CreateRepoModal from "../../CreateRepoModal";
import { Modal } from "../../../context/Modal";

import { useDetectOutsideClick } from "../../../services/detectOutsideClick";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { logout } from "../../../services/auth";

const DropDownMenu = ({ setAuthenticated, userId }) => {
	let location = useLocation();
	const onLogout = async (e) => {
		await logout();
		setAuthenticated(false);
	};

	const history = useHistory();
	const [showModal, setShowModal] = useState(false);

	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
	const onClick = () => setIsActive(!isActive);

	const profileRedirect = () => {
		let pathname = location.pathname;

		if (pathname.startsWith(`/profile/${userId}`)) {
			setIsActive(false);
			return;
		}
		setIsActive(false);
		history.push(`/profile/${userId}`);
		// history.push(`profile/${username}`)
	};


	return (
		<>
			<div className="menu-container">
				<div onClick={onClick} className="menu-trigger">
					<AiOutlineMenu className="menu-icon" />
				</div>
				<nav
					ref={dropdownRef}
					className={`menu abs ${isActive ? "active" : "inactive"}`}
				>
					<ul>
						<li>
							<div onClick={profileRedirect}>Profile</div>
						</li>
						<li></li>
						<li>
              <div onClick={() => setShowModal(true)}>Create Quiz</div>
              {showModal && (
										<Modal onClose={() => setShowModal(false)}>
											<CreateRepoModal setShowModal={setShowModal} />
										</Modal>
									)}
						</li>
						<li>
							<div onClick={onLogout}>Sign Out</div>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default DropDownMenu;
