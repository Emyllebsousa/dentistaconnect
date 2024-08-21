import React from 'react';

export default function CadastrarProcedimento() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-700">Cadastrar Procedimento</h2>
        <form>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2">Nome:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Procedimento:</label>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-300 rounded-md">Procedimento 1</button>
                <button className="px-4 py-2 bg-gray-300 rounded-md">Procedimento 2</button>
                <button className="px-4 py-2 bg-gray-300 rounded-md">Procedimento 3</button>
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Gênero:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Profissional:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Data de nascimento:</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Data:</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Telefone:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Hora Inicial:</label>
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Hora final:</label>
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}