import {FC, PropsWithChildren} from 'react';
import Header from "@/components/layout/header/Header";
import {Titillium_Web} from "next/font/google";


// const titilium = Titillium_Web({
//     weight:['300', '400', '600', '700'],
//     subsets:['latin'],
//     variable: '--titilium'
// })
const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;