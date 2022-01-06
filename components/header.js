import Link from "next/link"

export default function Header() {
  return (
    <header className="font-black">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Johan Hanses
        </h1>

        {/* <Link href="/cv">
          <a className="text-xl hover:underline">CV</a>
        </Link> */}
      </div>
    </header>
  )
}
