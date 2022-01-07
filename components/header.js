import Link from "next/link"
import { useTheme } from "next-themes"
import Moon from "./header/moon"
import Sun from "./header/sun"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="font-black">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <a>
            <h1 className="text-2xl md:text-4xl lg:text-6xl uppercase">
              Johan Hanses
            </h1>
          </a>
        </Link>

        <nav className="flex items-center space-x-4 lg:space-x-6">
          {/* <Link href="/cv">
            <a className="text-xl lg:text-2xl hover:text-green-500 dark:hover:text-green-900 transition-colors duration-300">
              CV
            </a>
          </Link> */}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-green-500 dark:hover:text-green-900 dark:text-white transition-colors duration-300"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </nav>
      </div>
    </header>
  )
}
