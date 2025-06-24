'use client';
import Modal from '@/components/modal/Modal';
import styles from './HeaderMobile.module.scss'
import Image from "next/image";
import { useEffect, useState } from 'react';
import SearchModal from './search/SearchModal';
import CartModal from './cart/CartModal';
import MenuModal from './menu/MenuModal';

enum ModalType{
    Search,
    Cart,
    Menu
}

const HeaderMobile = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                document.documentElement.style.overflow = 'auto';
                setIsOpen(false)
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setIsOpen]);

    const handleClose = () =>{
        document.documentElement.style.overflow = 'auto';
        setIsOpen(false);
    }

    const handleOpen = () =>{
        document.documentElement.style.overflow = 'hidden';
        setIsOpen(true);
    }

    const childrens = [
        <SearchModal key='search' onClose={handleClose}/>, 
        <CartModal key='cart' onClose={handleClose}/>,
        <MenuModal key='menu' onClose={handleClose}/>
    ]

    const handleClick = (val: number) =>{
        setCurrentModal(val)
        handleOpen();
    }

    return(
        <> 
            <header className={styles.header}>
                <section>
                    <Image
                        src="/logo.svg"
                        alt='zapli logo'
                        width={105}
                        height={48}
                    />
                </section>
                <section className={styles.buttons}>
                    <button
                        onClick={() => handleClick(ModalType.Search)}
                    >
                        <Image
                            src="/search.svg"
                            alt='search icon'
                            width={24}
                            height={24}
                        />
                    </button>
                    <button
                        onClick={() => handleClick(ModalType.Cart)}
                    >
                        <Image
                            src="/cart.svg"
                            alt='cart icon'
                            width={20}
                            height={20}
                        />
                    </button>
                    <button
                        onClick={() => handleClick(ModalType.Menu)}
                    >
                        <Image
                            src="/menu.svg"
                            alt='menu icon'
                            width={24}
                            height={24}
                        />
                    </button>
                </section>
                <Modal
                    onClose={handleClose}
                    isOpen={isOpen}
                >
                    {childrens[currentModal]}
                </Modal>
            </header>
        </>
    )
}

export default HeaderMobile
