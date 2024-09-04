import { Card } from "@/components/Card/Card"
import { LayoutComponent } from "@/components/doce/LayoutComponent/LayoutComponent"
import { Character } from "@/types"


function Home({ data }: { data: Character}) {
    return (
        <div>
            <LayoutComponent>
                <Card  data={data} />
            </LayoutComponent>
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

    const res = await fetch('https://rickandmortyapi.com/api/character/3')
    const data = await res.json()

    return {
        props: {
            title: 'Home',
            data
        }
    }
}

export default Home