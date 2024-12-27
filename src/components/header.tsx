import Link from 'next/link'

export function Header() {
  return (
    <header className="flex h-32 w-full flex-col items-center justify-center bg-gray-100 drop-shadow-md lg:h-20 lg:flex-row lg:justify-evenly">
      <Link
        href="/sentinela"
        className="text-2xl font-semibold tracking-tight text-blue-900 transition-all ease-in-out hover:scale-105"
      >
        Projeto Sentinela
      </Link>
      <ul className="flex space-x-4">
        <li className="border-b-2 border-transparent text-gray-500 transition-colors ease-in-out hover:border-b-blue-600 hover:text-gray-800">
          <Link href="/sentinela">Home</Link>
        </li>
        <li className="border-b-2 border-transparent text-gray-500 transition-colors ease-in-out hover:border-b-blue-600 hover:text-gray-800">
          <Link href="/sentinela/search">Buscas</Link>
        </li>
        <li className="border-b-2 border-transparent text-gray-500 transition-colors ease-in-out hover:border-b-blue-600 hover:text-gray-800">
          <Link href="/sentinela/about">Sobre o Projeto</Link>
        </li>
      </ul>
    </header>
  )
}
