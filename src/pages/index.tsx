import Head from "next/head";
import MenuState from "@/context/MenuState";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Categories from "@/components/Categories/Categories";
import Recommendations from "@/components/Recommendations/Recommendations";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {
	return (
		<>
			<Head>
				<title>ASale</title>
			</Head>
			<MenuState>
				<Header/>
			</MenuState>
			<main>
				<Intro/>
				<Categories/>
				<Recommendations/>
			</main>
			<Footer/>
		</>
	);
};

export default HomePage;