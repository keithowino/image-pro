import React from "react";
import { metadata } from "../../lib/DynamicData";
import { images } from "../../constants";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="font-bold normal-case text-xl">
					{metadata.title} <span>📸</span>
				</a>
			</div>
			<div className="flex-none gap-2">
				<div className="dropdown dropdown-end">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img src={images.user_icon_placeholder} />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<button className="btn btn-primary">Logout</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
