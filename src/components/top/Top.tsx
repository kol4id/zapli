'use client';

import Description from "./description/Description"
import Header from "./header/Header"
import HeaderMobile from "./header/HeaderMobile"
import styles from './Top.module.scss'
import { useEffect } from "react";
import { fetchProducts } from "@/store/productsSlice";
import { useAppDispatch} from "@/store/storeHooks";
import { authUser } from "@/store/userSlice";
import { cartLoadItems } from "@/store/cartSlice";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Top = () => {
    const dispatch = useAppDispatch();

    const loadProducts = async () =>{
        const limit = 500;

        const fetch = async (offset: number) =>{
            // API LOCKED AT 1RP/S;
            await sleep(500);
            const result = await dispatch(fetchProducts(offset));
            if ((offset + limit) < result.payload.found) fetch(offset + limit);
        }

        await fetch(0);
    }


    const fetchData = async () =>{
        await dispatch(authUser());
        await loadProducts();
    }

    useEffect(()=>{
        fetchData();
        dispatch(cartLoadItems());
    }, [])

    return(
        <>
            <section className={styles.top}>
                <Header/>
                <HeaderMobile/>
                <Description/>
            </section>
        </>
    )
}

export default Top
