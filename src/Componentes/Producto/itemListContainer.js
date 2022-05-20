import Producto from '../Producto/Producto'
import { Grid } from '@mui/material';

const ItemListContainer = ({title}) => {
    return(
        <>
        <h2>{title}</h2>
        <Grid container>
            <Grid item md={4}>
                <Producto title={"Maiz economico"} price={500} image={"./imagenes/maiz.jpg"}/>
            </Grid>
            <Grid item md={4}>
                <Producto title={"Papa para el bolsillo"} price={200} image={"./imagenes/papas.jpg"}/>
            </Grid>
            <Grid item md={4}>
                <Producto title={"lechuga bien economica"} price={80} image={"./imagenes/lechuga.jpg "}/>
            </Grid>
        </Grid>
        </>
    )
}

export default ItemListContainer