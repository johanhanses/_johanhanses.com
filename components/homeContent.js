import Links from "./home/links"
import EmailLogo from "./home/emailLogo"
import InfoLogo from "./home/infoLogo"

export default function HomeComponent() {
  return (
    <div className="mx-auto md:p-6 text-lg md:text-2xl font-lato">
      <Links />

      <div className="space-y-6">
        <address>
          <a
            href="mailto:johanhanses@gmail.com"
            className="flex items-center hover:text-green-500 transition-colors duration-300 not-italic"
          >
            <EmailLogo />
            johanhanses@gmail.com
          </a>
        </address>

        <article className="flex">
          <InfoLogo />

          <div className="leading-relaxed">
            <p>
              Laravel and JavaScript fullstack developer based in Falun, Sweden.
              Coding web stuff at{" "}
              <a
                href="https://panang.se"
                target="_blank"
                rel="noreferrer noopener"
                className="underline hover:text-green-500 transition-colors duration-300"
              >
                Panang.
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
