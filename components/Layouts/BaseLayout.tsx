import { Grid, GridItem } from "@chakra-ui/layout";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TodosContainer from "../Todos/TodosContainer";

const BaseLayout = ({ children }) => {
	return (
		<Grid
			templateColumns={{ base: "100px 1fr", xl: "100px 1fr 400px" }}
			templateRows="100px 1fr 100px"
			gridTemplateAreas={{
				lg: `"sidebar navbar todos"
			           "sidebar base  todos"
			           "sidebar base  todos"`,
				base: `"navbar navbar"
                       "base base"
                       "sidebar sidebar"`,
			}}
			h="full"
		>
			<Sidebar />
			<Navbar />
			<GridItem
				bg="purple.50"
				p="8"
				gridArea="base"
				h="full"
				boxSizing="border-box"
			>
				{children}
			</GridItem>
			<TodosContainer />
		</Grid>
	);
};

export default BaseLayout;
