import React, { useState } from 'react';
import { Building2, Calendar, PiggyBank, Wallet } from 'lucide-react';

function App() {
  const [investment, setInvestment] = useState(500);

  const calculateQuarterlyReturns = (amount: number) => {
    const annualRate = 0.20;
    const quarterlyRate = annualRate / 4;
    const quarterlyPayment = amount * quarterlyRate;
    const totalQuarterlyPayments = quarterlyPayment * 8;
    const finalAmount = amount + totalQuarterlyPayments;

    return {
      quarterlyPayment,
      totalQuarterlyPayments,
      finalAmount
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-HN', {
      style: 'currency',
      currency: 'HNL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const returns = calculateQuarterlyReturns(investment);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Hokmot Inversiones</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Calcula tu Inversión</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="investment" className="block text-sm font-medium text-gray-700">
                Elige el monto a invertir
              </label>
              <div className="mt-1">
                <input
                  type="range"
                  id="investment"
                  min="500"
                  max="1000000"
                  step="10000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-lg font-semibold text-blue-600 mt-2">
                  {formatCurrency(investment)}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Ganarás</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Recibirás cada 3 meses</span>
                  </div>
                  <span className="text-xl font-bold text-blue-600">{formatCurrency(returns.quarterlyPayment)}</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <PiggyBank className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Tu ganancia</span>
                  </div>
                  <span className="text-xl font-bold text-green-600">{formatCurrency(returns.totalQuarterlyPayments)}</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wallet className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Monto Final</span>
                  </div>
                  <span className="text-xl font-bold text-purple-600">{formatCurrency(returns.finalAmount)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
