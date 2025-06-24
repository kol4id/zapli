'use client';
import { useEffect, useState, type FC } from "react";
import ReactDOM from "react-dom";

import styles from './Modal.module.scss'

interface IProps{
    isOpen: boolean,
    onClose?: () =>void,
    position?: {x: number, y: number},
    overlayClickClose?: boolean,
    children: React.ReactNode;
}

const Modal: FC<IProps> = ({isOpen, onClose, overlayClickClose, children}) => {
    const [portalElement, setPortalElement] = useState<HTMLElement | null>();
    
    useEffect(()=>{
        setPortalElement(document.getElementById('portal'))
    },[])

    return (
        <>
        {isOpen && ReactDOM.createPortal(
            <div className={styles.modal_overlay} onClick={overlayClickClose ? onClose : ()=>{}}>
                {children}
            </div>,
            portalElement || document.body
        )}
        </>
    );
}

export default Modal