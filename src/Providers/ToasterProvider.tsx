"use client";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <>
            <Toaster
                toastOptions={{
                    style: {
                        background: '#ebf2ed',
                        color: '#475569',
                    }
                }}
            />
        </>
    )
};

export default ToasterProvider;