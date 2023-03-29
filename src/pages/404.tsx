import {NextPage} from "next";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

const NotFound: NextPage = () => {
    return (
        <Layout>
            <div style={{textAlign: 'center'}}>
                <Image priority src={'/404.webp'} alt={''} width={500} height={450}/>
            </div>
        </Layout>
    );
};

export default NotFound;