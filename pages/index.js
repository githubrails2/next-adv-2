import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@material-ui/core";

import Layout from "../components/Layout";
import data from "../utils/data.js";

//import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<Layout>
			<div>
				<h1>Products</h1>
				<Grid container spacing={3}>
					{data.products.map((product) => (
						<Grid key={product.name} item md={4}>
							<Card>
								<CardActionArea>
									<CardMedia
										component="img"
										image={product.image}
										title={product.name}></CardMedia>
									<CardContent>
										<Typography>{product.name}</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Typography>${product.price}</Typography>
									<Button size="small" color="primary">
										Add to Cart
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</Layout>
	);
}
