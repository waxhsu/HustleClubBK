import React from "react";
import './TestComponent.css'
import PurchaseBox from '../PurchaseBox/PurchaseBox';
import Modal from "../Modal/Modal";


export default function TestComponent({ children }) {
    return (
        <section className="container test-component">
            {children}
        </section>

    )


}