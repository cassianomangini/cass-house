# Cass House - Sistema de Gerenciamento Residencial

Sistema completo e moderno para gerenciamento de casa inteligente, desenvolvido com Next.js 15 e Supabase.

## 🚀 Stack Tecnológica (2025)

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 19** - Com Server Components nativos
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização moderna
- **Lucide React** - Ícones

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Database relacional
- **Row Level Security** - Segurança granular

### Estado & Cache
- **TanStack Query v5** - Cache e sincronização de dados
- **Zustand** - Gerenciamento de estado leve

### Desenvolvimento
- **Biome** - Linting e formatação (substituto do ESLint + Prettier)
- **Vitest** - Testes unitários e de integração
- **TypeScript strict mode** - Máxima segurança de tipos

## 🏗️ Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 15)
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes reutilizáveis
│   └── ui/            # Componentes de UI base
├── hooks/             # Custom hooks
│   └── use-auth.ts    # Hook de autenticação
├── lib/               # Utilitários e configurações
│   ├── supabase.ts    # Cliente Supabase
│   ├── utils.ts       # Funções utilitárias
│   └── query-provider.tsx # Provider do TanStack Query
├── stores/            # Stores Zustand
└── test/              # Configuração de testes
    └── setup.ts
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor com Turbopack
npm run build        # Build de produção
npm run start        # Servidor de produção

# Qualidade de código
npm run lint         # Verifica código com Biome
npm run lint:fix     # Corrige automaticamente
npm run format       # Formata código

# Testes
npm run test         # Executa testes
npm run test:ui      # Interface visual dos testes
npm run type-check   # Verifica tipos TypeScript
```

## 🔧 Configuração

1. **Clone o repositório**
```bash
git clone <repo-url>
cd cass-house
```

2. **Instale dependências**
```bash
npm install
```

3. **Configure variáveis de ambiente**
```bash
cp .env.example .env.local
# Configure suas chaves do Supabase
```

4. **Inicie o desenvolvimento**
```bash
npm run dev
```

## 🏠 Funcionalidades Planejadas

- [ ] **Controle de Iluminação** - Automação e controle de luzes
- [ ] **Sistema de Segurança** - Alarmes, câmeras e controle de acesso
- [ ] **Monitoramento de Energia** - Consumo e otimização
- [ ] **Automação Residencial** - Cenários e rotinas personalizadas
- [ ] **Interface Mobile** - PWA responsivo
- [ ] **Dashboard Analytics** - Relatórios e métricas

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "next": "15.4.7",
    "react": "19.1.0",
    "@supabase/supabase-js": "^2.x",
    "@tanstack/react-query": "^5.x",
    "zustand": "^5.x",
    "tailwindcss": "^4.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "@biomejs/biome": "^1.x",
    "vitest": "^2.x",
    "typescript": "^5.x"
  }
}
```

## 🌟 Características Modernas

- ⚡ **Turbopack** - Build e hot reload ultra-rápido
- 🔒 **Type Safety** - TypeScript strict mode
- 🎨 **Design System** - Componentes consistentes
- 📱 **Mobile First** - Responsivo e PWA-ready
- 🔄 **Real-time** - Sincronização em tempo real
- 🛡️ **Security** - RLS e autenticação robusta

## 📝 Padrões de Desenvolvimento

- **Componentes**: Funcionais com hooks
- **Estado**: Zustand para global, useState para local
- **Dados**: TanStack Query para server state
- **Estilo**: Tailwind com design tokens
- **Testes**: Vitest + Testing Library
- **Commits**: Conventional commits

---

Desenvolvido com ❤️ usando as tecnologias mais modernas de 2025.