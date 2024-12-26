import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Header />
      <section className="container flex h-full w-full flex-col items-center justify-center p-10 text-xl lg:w-2/3 lg:text-xl">
        <article className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-justify shadow-lg">
          <p>
            O objetivo deste portal é apresentar uma coleção digitalizada de
            edições do célebre jornal &quot;Sentinela&quot;, existente na cidade
            de Canela nas décadas de 1940 e 1950. Essas edições eram raras e só
            existiam na forma de duas coleções encadernadas de seis volumes, uma
            existente na Biblioteca Pública de Canela e outra em uma escola da
            rede estadual no mesmo município, sem que seja conhecida outra
            copia. A digitalização dos acervos, sua organização e publicação
            online foram realizadas em parceria pelo Laboratório de História
            Social da Universidade de Brasília e o Centro de Memória do Trabalho
            do município de Canela.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  )
}
