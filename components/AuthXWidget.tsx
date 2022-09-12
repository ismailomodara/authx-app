import Script from 'next/script'

export default function AuthXWidget() {

  const initializeAuthX = () => {
    // @ts-ignore
    const authx = AuthX("Wn9PZ3NcYMWRlWyf78Aovdok95vahmE3Sp6Js1Tp", {
      redirect_uri: "https://authx-app-ismailomodara.vercel.app/redirect",
      locale: 'en',
      isSpa: true,
      onComplete: (session, message) => {
        console.log('logged in ', session, message)
        // @ts-ignore
        console.log('Session = ', authx.getSession())
      },
      onError: function (error) {
        alert(error.message)
      }
    })

    window["authx"] = authx
  }

  return (
    <>
      <Script
        id="authx"
        src="https://ajs.radius.africa/authx.js"
        onLoad={initializeAuthX}
      />
    </>
  )
}
