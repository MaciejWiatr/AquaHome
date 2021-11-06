import { Grid, GridItem } from "@chakra-ui/layout";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";

const BaseLayout = ({ children }) => {
	return (
		<Grid templateColumns="100px 1fr 200px" h="full">
			<Sidebar />
			<GridItem>
				<Grid h="full" templateRows="100px 1fr">
					<Navbar />
					<GridItem bg="red.300">{children}</GridItem>
				</Grid>
			</GridItem>
			<GridItem bg="papayawhip">prawek</GridItem>
		</Grid>
	);
};

export default BaseLayout;
