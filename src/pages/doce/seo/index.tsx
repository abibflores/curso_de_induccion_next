import { Card } from "@/components/Card/Card"
import { Character } from "@/types"
import Head from "next/head"

function SeoPage({ data }: { data: Character}) {
    return (
        <div>
            <Head>
                <title>{data.name} - SEO</title>
                <meta name="description" content="SEO Page" />
            </Head>
            <Card  data={data} />
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://rickandmortyapi.com/api/character/2')
    const data = await res.json()

    return {
        props: {
            title: 'Home',
            data
        }
    }
}

export default SeoPage