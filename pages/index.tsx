import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
    <Header />
      <iframe 
        frameBorder="0"
        className="w-full h-full"
        src="https://registry.jsonresume.org/vertex?theme=spartan"></iframe>
    </>
  )
}
