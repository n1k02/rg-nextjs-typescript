import {NextPage} from "next";
import {useRouter} from "next/router";

const CarPage: NextPage = () => {
    const {push, replace} = useRouter()
    return (
        <div>
            <button onClick={()=> push('/')}>push</button>
            <button onClick={()=> replace('/')}>replace</button>
        </div>
    );
};

    export default CarPage;