import React from "react";
import { images } from "../../constants";

const ImageGallery = () => {
	return (
		<section className="grid grid-cols-3 my-4">
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={images.mitsuri_kanroji} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={images.Steppenwolf} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={images.sung_jin_wuu} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageGallery;
