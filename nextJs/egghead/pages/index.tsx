import { NextPage } from "next";
import Link from "next/link";

const IndexPage:NextPage = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <Link href="/about">Go to the About Page</Link>
        </>
    )
}

export default IndexPage;