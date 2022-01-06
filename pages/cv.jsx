import { useSession, signIn, signOut } from "next-auth/client"

export default function Cv() {
  const [session, loading] = useSession()

  if (loading) {
    return null
  }

  if (!loading && !session) {
    return (
      <button onClick={() => signIn("cognito")}>
        Login
      </button>
    )
  }

  return (
    <>
      <p>CV</p>

      Signed in as {session.user.name}

      <button onClick={() => signOut()}>
        Sign out
      </button>
    </>
  )
}
