import React from "react";
import MetaDataInsert from "../lib/MetaDataInsert";
import { metadata } from "../lib/DynamicData";

const Auth = () => {
	return (
		<>
			<MetaDataInsert title={"Signin"} />
			<section className="auth">
				<form>
					<div className="hero min-h-screen bg-base-200">
						<div className="hero-content flex-col">
							<div className="text-center">
								<h1 className="text-5xl font-bold">
									{metadata.title}
								</h1>
								<p className="py-6">
									Signup to share your imagination to the
									world.
								</p>
							</div>
							<div className="card sm:w-[30rem] shadow-2xl bg-base-100">
								<div className="card-body">
									<div className="form-control">
										<label className="label">
											<span className="label-text">
												Email
											</span>
										</label>
										<input
											type="text"
											placeholder="email"
											className="input input-bordered"
										/>
									</div>
									<div className="form-control">
										<label className="label">
											<span className="label-text">
												Password
											</span>
										</label>
										<input
											type="text"
											placeholder="password"
											className="input input-bordered"
										/>
									</div>
									<div className="form-control mt-6">
										<button className="btn btn-primary">
											Signup
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default Auth;
