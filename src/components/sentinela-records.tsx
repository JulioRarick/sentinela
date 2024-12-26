'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Record {
  ID: number
  Edicao: number
  Ano: number
  Mes: string
  Dia: number
  Arquivo: string
  conteudo?: string
}

export function SentinelaRecords() {
  const [records, setRecords] = useState<Record[]>([])
  const [filterType, setFilterType] = useState<
    'none' | 'Edicao' | 'Ano' | 'conteudo'
  >('none')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construir a URL com parâmetros de busca
        const url = new URL('http://localhost:3000/api/dados')
        url.searchParams.set('filtro', filterType)
        url.searchParams.set('valor', filterValue)

        const response = await fetch(url)
        const data = await response.json()
        setRecords(data)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      }
    }

    fetchData()
  }, [filterType, filterValue])

  const handleFilterChange = (
    value: 'none' | 'Edicao' | 'Ano' | 'conteudo',
  ) => {
    setFilterType(value)
    setFilterValue('')
  }

  const filteredRecords = records.filter((record) => {
    if (filterType === 'none' || !filterValue) return true
    const searchValue = filterValue.toLowerCase()

    switch (filterType) {
      case 'Edicao':
        return record.Edicao.toString().includes(searchValue)
      case 'Ano':
        return record.Ano.toString().includes(searchValue)
      case 'conteudo':
        return record.conteudo?.toLowerCase().includes(searchValue) || false
      default:
        return true
    }
  })

  return (
    <div>
      <div className="mb-4">
        <select
          value={filterType}
          onChange={(e) =>
            handleFilterChange(
              e.target.value as 'none' | 'Edicao' | 'Ano' | 'conteudo',
            )
          }
          className="mr-2 rounded border border-gray-400 p-2"
        >
          <option value="none" disabled>
            Selecione o filtro...
          </option>
          <option value="Edicao">Por Edição</option>
          <option value="conteudo">Por Palavra</option>
        </select>

        {filterType !== 'none' && (
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder={
              filterType === 'conteudo'
                ? 'Digite a palavra...'
                : `Digite o ${filterType.toLowerCase()}...`
            }
            className="rounded border border-gray-400 p-2"
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {filteredRecords.map((record) => (
          <div
            key={record.ID}
            className="h-full w-56 rounded bg-gray-100 p-4 shadow"
          >
            <div className="mb-2 text-center font-semibold text-gray-800">
              Edição {record.Edicao} - {record.Ano} - {record.Mes} -{' '}
              {record.Dia}
            </div>
            <a
              href={`/PDFs/${record.Edicao}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/capas/${record.Arquivo}`}
                alt={`Edição ${record.Edicao}`}
                width={150}
                height={150}
                className="mx-auto object-contain"
              />
            </a>
            {filterType === 'conteudo' && record.conteudo && (
              <div className="mt-2 text-justify text-xs">
                {record.conteudo.substring(0, 200)}...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
