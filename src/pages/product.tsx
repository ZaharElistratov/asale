import Head from "next/head";
import HeaderState from "@/context/MenuState";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import Gallery from "@/components/Gallery/Gallery";
import Information from "@/components/Information/Information";
import Recommendations from "@/components/Recommendations/Recommendations";
import Footer from "@/components/Footer/Footer";
import useMediaQuery from "@/hooks/useMediaQuery";

const CatalogPage = () => {
	const isTablet = useMediaQuery('(max-width: 1399px)')
	
	return (
		<>
			<Head>
				<title>ASale</title>
			</Head>
			<HeaderState>
				<Header product/>
			</HeaderState>
			<main>
				{isTablet ? null :
					<Breadcrumbs/>
				}
				<Gallery/>
				<Information/>
				<Recommendations/>
			</main>
			<Footer/>
		</>
	);
};

export default CatalogPage;