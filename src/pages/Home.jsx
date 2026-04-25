import React from "react";
import Navbar from "../components/home/Navbar";
import UploadForm from "../components/home/UploadForm";
import ImageGallery from "../components/home/ImageGallery";
import MetaDataInsert from "../lib/MetaDataInsert";
import { metadata } from "../lib/DynamicData";

const Home = () => {
	return (
		<>
			<MetaDataInsert title={metadata.title} />
			<section className="home">
				<Navbar />
				<UploadForm />
				<ImageGallery />
			</section>
		</>
	);
};

export default Home;
