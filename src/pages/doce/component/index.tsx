import { CardWithButton } from "@/components/doce/CardWithButton/CardWithButton"
import { Character } from "@/types"
import React from 'react';

function Home({ data }: { data: Character}) {
    return (
        <div>
            <CardWithButton  data={data} />
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

export default Home