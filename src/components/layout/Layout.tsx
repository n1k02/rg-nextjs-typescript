import {FC, PropsWithChildren} from 'react';
import Header from "@/components/layout/header/Header";
import Meta from "@/components/seo/Meta";
import IMeta from "@/components/seo/meta.interface";
import dynamic from "next/dynamic";

// render the Footer component on the client side
const DynamicFooter = dynamic(()=> import ('./Footer'), {
    ssr: false
})

// const titilium = Titillium_Web({
//     weight:['300', '400', '600', '700'],
//     subsets:['latin'],
//     variable: '--titilium'
// })
const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        // custom component "Meta" for seo meta tags
        <Meta title={title} description={description}>
            <Header/>
            <main>
                {children}
            </main>
            <DynamicFooter/>
        </Meta>
    );
};

export default Layout;