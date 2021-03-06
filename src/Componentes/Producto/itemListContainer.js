import { Grid } from '@mui/material';
import Producto from './Producto';

const ItemListContainer = ({title, products}) => {

    return(
    <>
        <h2>{title}</h2>
        <Grid container spacing={2}>
            {
                products.map( ({title, price, image, stock , id}) => {
                    return(
                        <Grid item md={3} key={id}>
                            <Producto title={title} price={price} image={image} stock={stock}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    </>
    )
}

export default ItemListContainer