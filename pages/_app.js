import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
