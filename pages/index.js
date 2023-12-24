import Link from 'next/link'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-evenly p-12`}
    >
      <div className={`text-center`}>
        <h1 className={`text-3xl font-bold mb-2 drop-shadow`}>¡Feliz navidad para todos ustedes!</h1>
        <h3 className={`text-sm drop-shadow`}>Jingle bell, jingle bell, jingle mothaf*****.</h3>
      </div>
      <div className={`flex items-center flex-wrap justify-center drop-shadow`}>
        <Link href="/slides" className={`bg-white text-black py-1 px-12 rounded mb-2`}>Comenzar</Link>
        <p className={`italic text-xs drop-shadow`}>Aclaración: El siguiente texto no fue, bajo ningún término, realizado con ChatGPT y ningún tipo de IA.</p>
      </div>
    </main>
  )
}
