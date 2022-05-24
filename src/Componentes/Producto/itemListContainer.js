import Producto from '../Producto/Producto'
import { Grid } from '@mui/material';

const ItemListContainer = ({title}) => {
    return(
        <>
        <h2>{title}</h2>
        <Grid container>
            <Grid item md={3}>
                <Producto title={"Maiz"} price={500} image={"./imagenes/maiz.jpg"} stock={2}/>
            </Grid>
            <Grid item md={3}>
                <Producto title={"Papa"} price={200} image={"./imagenes/papas.jpg"} stock={3}/>
            </Grid>
            <Grid item md={3}>
                <Producto title={"Lechuga"} price={150} image={"./imagenes/lechuga.jpg"} stock={5}/>
            </Grid>
            <Grid item md={3}>
                <Producto title={"Frutilla"} price={400} image={"./imagenes/frutilla.jpg"} stock={10}/>
            </Grid>
        </Grid>
        </>
    )
}

export default ItemListContainer