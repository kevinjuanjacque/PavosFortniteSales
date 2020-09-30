import {useSelector} from 'react-redux';
export const CountCart = () => {

    const cart = useSelector(state => state.cart);
    const cantidadProducts= cart.products.length;
    return cantidadProducts ;
}
