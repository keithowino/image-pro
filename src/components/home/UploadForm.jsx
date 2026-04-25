import React from "react";

const UploadForm = () => {
	return (
		<section className="text-center mt-10">
			<form className="flex flex-col items-center gap-6">
				<input
					type="file"
					className="file-input file-input-bordered file-input-primary w-full max-w-xs"
				/>
				<button className="btn btn-primary gap-3">
					Upload <span>🚀</span>
				</button>
			</form>
		</section>
	);
};

export default UploadForm;
