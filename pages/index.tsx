import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
    <Head>
      <title>Bryon Keck</title>
    </Head>
    <Header />
    <div className="container mx-auto font-sans-serif">
        <h1>bryon keck</h1>
        <p>
            data visualizer, champion of the user, javascript junkie.  award winning photographer.
        </p>
    </div>
    </>
  )
}