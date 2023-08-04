import useMediaQuery from "@/hooks/useMediaQuery";
import FilterState from "@/context/FilterState";

import Head from "next/head";
import MenuState from "@/context/MenuState";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import Catalog from "@/components/Catalog/Catalog";
import Footer from "@/components/Footer/Footer";

const CatalogPage = () => {
	const isTablet = useMediaQuery('(max-width: 1399px)')
	
	return (
		<>
			<Head>
				<title>ASale</title>
			</Head>
			<MenuState>
				<FilterState>
					<Header catalog/>
				</FilterState>
			</MenuState>
			<main>
				{isTablet ? null :
					<Breadcrumbs/>
				}
				<Catalog/>
			</main>
			<Footer/>
		</>
	);
};

export default CatalogPage;