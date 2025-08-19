'use client'

import { Home, Lightbulb, Settings, Shield, Zap } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'

export default function HomePage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="h-10 w-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Cass House</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sistema completo de gerenciamento residencial moderno e inteligente
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8" />}
            title="Controle de Iluminação"
            description="Controle inteligente de todas as luzes da casa com automação por horário"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Segurança"
            description="Monitoramento de alarmes, câmeras e controle de acesso integrado"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Energia"
            description="Monitoramento do consumo energético e otimização automática"
          />
          <FeatureCard
            icon={<Settings className="h-8 w-8" />}
            title="Automação"
            description="Cenários personalizados e automações baseadas em sensores"
          />
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Status do Sistema</h2>
            {user ? (
              <div>
                <p className="text-green-600 mb-2">✓ Sistema Online</p>
                <p className="text-gray-600">Bem-vindo, {user.email}</p>
              </div>
            ) : (
              <div>
                <p className="text-orange-600 mb-2">⚠ Não autenticado</p>
                <p className="text-gray-600">Faça login para acessar o sistema</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
