import { Grid, GridItem } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
	return (
		<Grid templateColumns="100px 1fr 200px" h="full">
			<Sidebar />
			<GridItem>
				<Grid h="full" templateRows="100px 1fr">
					<GridItem bg="red.100" />
					<GridItem bg="red.300">{children}</GridItem>
				</Grid>
			</GridItem>
			<GridItem bg="papayawhip">prawek</GridItem>
		</Grid>
	);
};

export default BaseLayout;
