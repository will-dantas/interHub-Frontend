import Head from 'next/head'
import { useEffect, useState } from 'react'
import { HeaderAdmin } from '../../../components/HeaderAdmin'
import Pagination from '../../../components/Pagination'
import api from '../../../services/api'


export default function serviceOrderList() {

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
    //api.get('/service_orders').then(response => setServiceOrders(response.data.serviceOrders))
    console.log('Passou!')
  }, [serviceOrders])

  return (
    <div>
      <Head>
        <title>Cadastro de Usuários</title>
      </Head>

      <HeaderAdmin />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Ordem de Serviço Cadastradas</h1>
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
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="col-span-6 sm:col-span-3">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                {serviceOrders.map((serviceOrder) => (
                                  <option key={serviceOrder.id}>{serviceOrder.cliente}</option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="col-span-6 sm:col-span-3">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                {serviceOrders.map((serviceOrder) => (
                                  <option key={serviceOrder.id}>{serviceOrder.colaborador}</option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="col-span-6 sm:col-span-3">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                {serviceOrders.map((serviceOrder) => (
                                  <option key={serviceOrder.id}>{serviceOrder.create_at}</option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button
                              type="submit"
                              className="inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            //onClick={() => setUsers([...users,
                            //{
                            //  id: 1,
                            //  name: 'Bruna',
                            //  email: 'bruna@gmail.com',
                            //  occupation: 'Colaborador',
                            //  password: 'hdfh55'
                            //}])}
                            >
                              Filtrar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="col-span-6 sm:col-span-3">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                {serviceOrders.map((serviceOrder) => (
                                  <option key={serviceOrder.id}>{serviceOrder.cliente}</option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="col-span-6 sm:col-span-3">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                {serviceOrders.map((serviceOrder) => (
                                  <option key={serviceOrder.id}>{serviceOrder.colaborador}</option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="col-span-6 sm:col-span-3">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                {serviceOrders.map((serviceOrder) => (
                                  <option key={serviceOrder.id}>{serviceOrder.create_at}</option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                            <button
                              type="submit"
                              className="inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            //onClick={() => setUsers([...users,
                            //{
                            //  id: 1,
                            //  name: 'Bruna',
                            //  email: 'bruna@gmail.com',
                            //  occupation: 'Colaborador',
                            //  password: 'hdfh55'
                            //}])}
                            >
                              Ordenar
                            </button>
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
                            Nº
                          </th>
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
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{serviceOrder.id}</td>
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
      <Pagination/>
    </div>
  )
}