import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { SentinelaRecords } from '@/components/sentinela-records'

export default function Search() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <section className="container flex flex-col items-center justify-center p-10 text-xl lg:w-2/3 lg:text-xl">
        <h1 className="pb-6 text-4xl font-semibold tracking-tight text-blue-800">
          Busca
        </h1>
        <SentinelaRecords />
      </section>
      <Footer />
    </main>
  )
}
