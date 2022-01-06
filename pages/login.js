import { signIn, useSession } from "next-auth/client"
import React, { useEffect } from "react"
import { useRouter } from "next/router"

export default function LogIn() {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [session, router, loading])

  return (
    <div>
      Tjena, klicka <button onClick={() => signIn("cognito")} className="text-yellow-500">här</button> för att logga in
    </div>
  )
}
