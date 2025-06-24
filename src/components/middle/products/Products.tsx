'use client';

import { useAppSelector } from '@/store/storeHooks';
import ItemCard from './ItemCard'
import styles from './Products.module.scss'
import { RootState } from '@/store/store';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Products = () =>{
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateButtons = () => {
        const el = containerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth <= (el.scrollWidth - 10));
    }

    //true -> scroll right
    const scroll = (direction: boolean) => {
        containerRef.current?.scrollBy({
            left: !direction ? -1000 : 1000,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        updateButtons();
        el.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);

        return () => {
            el.removeEventListener("scroll", updateButtons);
            window.removeEventListener("resize", updateButtons);
        };
    }, []);

    const products = useAppSelector((state: RootState) => state.products.products.slice(0, 15));

    return(
        <>
            <section className={styles.products}>
                <article className={styles.title}>
                    <h5>Новые товары:</h5>
                    <div className={styles.buttons}>
                        <button
                            className="scroll-button left"
                            onClick={() => scroll(false)}
                            disabled={!canScrollLeft}
                        >
                            <Image
                                style={{opacity: !canScrollLeft ? 0.5 : 1}}
                                src='/button_left.svg'
                                alt='circle to left'
                                width={40}
                                height={40}
                            /> 
                        </button>
                        <button
                            className="scroll-button right"
                            onClick={() => scroll(true)}
                            disabled={!canScrollRight}
                        >
                            <Image
                                style={{opacity: !canScrollRight ? 0.5 : 1}}
                                src='/button_right.svg'
                                alt='circle to right'
                                width={40}
                                height={40}
                            /> 
                        </button>
                    </div>
                </article>
                <article className={styles.list} ref={containerRef}>
                    {
                        products.length != 0 
                        ? products.map((item) =>
                            <ItemCard key={item.id} name={item.name} price={item.price} stock={item.amount}/>
                        )
                        : <>
                            <ItemCard name='...' price={0} stock={0}/>
                            <ItemCard name='...' price={0} stock={0}/>
                            <ItemCard name='...' price={0} stock={0}/>
                            <ItemCard name='...' price={0} stock={0}/>
                            <ItemCard name='...' price={0} stock={0}/>
                        </>
                    }
                </article>
            </section>
        </>
    )
}
export default Products