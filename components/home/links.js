import LinkedInLogo from "./linkedInLogo"
import GitHubLogo from "./gitHubLogo"

export default function Links() {
  return (
    <nav className="flex space-x-4 mb-8 items-center">
      <a
        href="https://www.linkedin.com/in/johanhanses/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500 dark:hover:text-green-900 transition-colors duration-300"
      >
        <LinkedInLogo />
      </a>

      <a
        href="https://github.com/johanhanses"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500 dark:hover:text-green-900 transition-colors duration-300"
      >
        <GitHubLogo />
      </a>
    </nav>
  )
}
