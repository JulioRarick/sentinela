import Link from 'next/link'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <section className="container flex flex-col items-center justify-center p-10 text-xl lg:w-2/3 lg:text-xl">
        <article className="flex flex-col items-center justify-center gap-3 rounded-lg bg-gray-100 p-4 text-justify shadow-lg">
          <h1 className="text-center text-2xl font-semibold tracking-tight text-blue-700">
            Sobre o Projeto Sentinela
          </h1>
          <p>Desenvolvimento, digitalização e organização</p>
          <Link
            href="https://lhs.unb.br"
            target="_blank"
            className="font-thin text-blue-500 underline hover:font-medium hover:text-blue-700"
          >
            Laboratório de História Social, Universidade de Brasília
          </Link>
          <h2>Planejamento e Contato</h2>
          <Link
            href="http://www.cmtcanela.com.br/"
            target="_blank"
            className="font-thin text-blue-500 underline hover:font-medium hover:text-blue-700"
          >
            Centro de Memória do Trabalho de Canela
          </Link>

          <p className="p-4 text-justify">
            O objetivo deste portal é apresentar uma coleção digitalizada de
            edições do célebre jornal &quot;Sentinela&quot;, existente na cidade
            de Canela nas décadas de 1940 e 1950. Essas edições eram raras e só
            existiam na forma de duas coleções encadernadas de seis volumes, uma
            existente na Biblioteca Pública de Canela e outra em uma escola da
            rede estadual no mesmo município, sem que seja conhecida outra
            copia. A digitalização dos acervos, sua organização e publicação
            online foram realizadas em parceria pelo Laboratório de História
            Social da Universidade de Brasília e o Centro de Memória do Trabalho
            do município de Canela.{' '}
          </p>
        </article>
      </section>
      <Footer />
    </main>
  )
}
