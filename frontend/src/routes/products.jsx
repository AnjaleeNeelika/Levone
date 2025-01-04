import store from '../assets/store/store';
import { setLoading } from '../assets/store/features/common';
import { getProductBySlug } from '../api/fetchProducts';

const loadProductBySlug = async ({params}) => {
    try {
        store.dispatch(setLoading(true));
        const product = await getProductBySlug(params?.slug);
        store.dispatch(setLoading(false));

        return {product};
    } catch (err) {

    }
}

export default loadProductBySlug