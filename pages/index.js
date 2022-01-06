import Head from "next/head"
import Image from "next/image"
import Header from "../components/header"
import HomeContent from "../components/homeContent"

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center md:items-center font-lato">
      <Head>
        <title>Johan Hanses</title>
      </Head>

      <div className="w-full px-4 lg:px-0">
        <Header />

        <main className="max-w-4xl mx-auto flex justify-between md:items-center py-4 md:border-[24px] border-green-500 min-h-[400px]">
          <HomeContent />
        </main>
      </div>
    </div>
  )
}
