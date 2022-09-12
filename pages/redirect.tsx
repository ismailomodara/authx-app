import { useRouter } from 'next/router'

export default function Redirect() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/profile")
  }, 1000)
  return (
    <div className="redirect">
      <h1>Logging in...</h1>
    </div>
  )
}
