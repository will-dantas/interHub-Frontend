import Head from 'next/head'
import { useEffect, useState } from 'react'
import { HeaderClient } from '../../../components/HeaderClient'


export default function userRegister() {

  const [colaborador, setColaborador] = useState('');
  const [cliente, setCliente] = useState('');
  const [text, setTtext] = useState('');
  const [coordinates, setCoordinates] = useState('');

  const [serviceOrders, setServiceOrders] = useState([
    {
      id: 1,
      colaborador: 'William Marcos Dantas',
      cliente: 'InterHub',
      text: 'Problema no Software',
      coordinates: ' 41.40338, 2.17403',
      create_at: '01/01/2022'
    }
  ])

  useEffect(() => {
    console.log('Passou!')
  }, [serviceOrders])

  return (
    <div>
      <Head>
        <title>Ordens de Serviço</title>
      </Head>

      <HeaderClient />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Ordens de Serviço</h1>
        </div>
      </header>
      <main>


        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Colaborador
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Cliente
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Problema
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Coordenada
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">

                            <div className="mt-1 relative rounded-md shadow-sm">
                              <input
                                type="text"
                                name="price"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Colaborador"
                                value={colaborador}
                                onChange={event => setColaborador(event.target.value)}
                              />
                            </div>

                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="mt-1 relative rounded-md shadow-sm">
                              <input
                                type="text"
                                name="price"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Cliente"
                                value={cliente}
                                onChange={event => setCliente(event.target.value)}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div>
                              <div className="mt-1">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows={3}
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                  placeholder="Problema..."
                                  value={text}
                                  onChange={event => setTtext(event.target.value)}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="mt-1 relative rounded-md shadow-sm">
                              <input
                                type="text"
                                name="price"
                                id="price"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Coordendas"
                                value={coordinates}
                                onChange={event => setCoordinates(event.target.value)}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="mt-1 relative rounded-md shadow-sm">
                              <button
                                type="submit"
                                className="inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => setServiceOrders([...serviceOrders,
                                {
                                  id: 1,
                                  colaborador: 'Bruna Vilanova',
                                  cliente: 'controleHub',
                                  text: 'Problema no Software',
                                  coordinates: '38.736946, -9.142685',
                                  create_at: '02/02/2022'
                                }])}
                              >
                                Concluído
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Colaborador
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Cliente
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Problema
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Coordenada
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Data
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {serviceOrders.map((serviceOrder) => (
                          <tr key={serviceOrder.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{serviceOrder.colaborador}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{serviceOrder.cliente}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{serviceOrder.text}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{serviceOrder.coordinates}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{serviceOrder.create_at}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}