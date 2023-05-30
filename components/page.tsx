import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

type PageProps = {
    title?: string;
    description?: string;
    children: React.ReactNode;
};

const Page = ({ title, description, children }: PageProps) => (
    <div style={{ scrollBehavior: "smooth" }}>
        <Head>
            <title>{title || "Eirik sin Next nettside"}</title>
            <meta name="description" content={description}></meta>
            <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTKppeyzGjFeenkyiLnMb-yte0042HPWNkuDCJOiU_dg0vBoJT5iGmo8sOYjA6qXB4lc&usqp=CAU"></link>
        </Head>
        <Navbar />
        {children}
        <Footer/>
    </div>
);

export default Page;
