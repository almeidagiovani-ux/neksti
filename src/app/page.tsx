"use client"

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  Rocket,
  Smartphone,
  Server,
  Calendar,
  CreditCard,
  FileSignature,
  Globe,
  BookOpen,
  Zap,
  Mail,
  Bot,
  Phone,
  Star,
  Users,
  Package,
  CheckCircle,
  MessageCircle,
  Briefcase,
  Headphones,
  X,
} from 'lucide-react'

const individualServices = [
  { icon: Smartphone, label: 'Centralização de Atendimento', desc: 'WhatsApp, IG, FB e mais em uma única plataforma', color: 'text-brand-green' },
  { icon: Calendar, label: 'Configuração de Agendamentos', desc: 'Calendários inteligentes e automatizados', color: 'text-brand-green-lt' },
  { icon: Server, label: 'Estruturação de CRM e Vendas', desc: 'Pipelines, listas e gestão de leads', color: 'text-brand-green' },
  { icon: CreditCard, label: 'Sistema de Pagamentos e Faturas', desc: 'Integração com Stripe e PagBank', color: 'text-brand-green-lt' },
  { icon: FileSignature, label: 'Automação de Contratos', desc: 'Assinatura digital sem fricção', color: 'text-brand-green' },
  { icon: Globe, label: 'Desenvolvimento Web', desc: 'Sites, funis de vendas e blogs', color: 'text-brand-green-lt' },
  { icon: BookOpen, label: 'Gestão de Infoprodutos', desc: 'Área de membros, upsells e cursos', color: 'text-brand-green' },
  { icon: Zap, label: 'Automação de Marketing', desc: 'Fluxos complexos de nutrição e engajamento', color: 'text-brand-green-lt' },
  { icon: Mail, label: 'Social Media e E-mail', desc: 'Agendamento de posts e campanhas', color: 'text-brand-green' },
  { icon: Bot, label: 'Implementação de IA (Texto)', desc: 'Bots inteligentes para WhatsApp e IG', color: 'text-brand-green-lt' },
  { icon: Phone, label: 'Implementação de IA (Voz)', desc: 'Atendentes telefônicos com IA', color: 'text-brand-green' },
  { icon: Star, label: 'Gestão de Reputação', desc: 'Google Meu Negócio e gestão de reviews', color: 'text-brand-green-lt' },
  { icon: Users, label: 'Estruturação de Afiliados', desc: 'Comissionamento, tracking e links', color: 'text-brand-green' },
]

const packages = [
  {
    name: 'Porta de Entrada',
    subtitle: 'Comece com o essencial',
    includes: ['Gestão de Reputação', 'Centralização de Atendimento'],
    gradient: 'from-[#192D4A] to-[#0D1B2E]',
    accent: 'border-[#2D6E45]/40',
    btnGradient: 'from-[#2D6E45] to-[#3D8A58]',
  },
  {
    name: 'Operação Essencial',
    subtitle: 'Organize sua operação',
    includes: ['Estruturação de CRM e Vendas', 'Configuração de Agendamentos', 'Social Media e E-mail'],
    gradient: 'from-[#192D4A] to-[#0D1B2E]',
    accent: 'border-[#2D6E45]/40',
    btnGradient: 'from-[#2D6E45] to-[#3D8A58]',
  },
  {
    name: 'Máquina de Vendas',
    subtitle: 'Escale suas vendas',
    includes: ['Desenvolvimento Web e Funis', 'Sistema de Pagamentos', 'Automação de Marketing'],
    gradient: 'from-[#223B5E] to-[#192D4A]',
    accent: 'border-[#2D6E45]/70',
    btnGradient: 'from-[#2D6E45] to-[#3D8A58]',
    highlight: true,
  },
  {
    name: 'Soluções Premium',
    subtitle: 'O poder total da IA',
    includes: ['IA Texto (Bots)', 'IA Voz (Telefone)', 'Gestão de Infoprodutos', 'Automação de Contratos'],
    gradient: 'from-[#192D4A] to-[#0D1B2E]',
    accent: 'border-[#2D6E45]/40',
    btnGradient: 'from-[#2D6E45] to-[#3D8A58]',
  },
]

const contacts = [
  {
    icon: Briefcase,
    label: 'Projetos',
    number: '5519997051313',
  },
  {
    icon: MessageCircle,
    label: 'Comercial',
    number: '5519982185983',
  },
  {
    icon: Headphones,
    label: 'Suporte',
    number: '5511969219696',
  },
]

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedContactUrl, setSelectedContactUrl] = useState('')
  const [formData, setFormData] = useState({
    nome: '',
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    telefone: '',
    funcionarios: '1-10',
  })

  const handleOpenContact = (number: string) => {
    setSelectedContactUrl(number)
    setModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá! Vim pelo site da Neksti.%0A%0A*Nome:* ${formData.nome}%0A*Empresa:* ${formData.nomeFantasia} (${formData.razaoSocial})%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.telefone}%0A*Tamanho da Empresa:* ${formData.funcionarios} funcionários`
    
    window.open(`https://wa.me/${selectedContactUrl}?text=${text}`, '_blank')
    setModalOpen(false)
    setFormData({ nome: '', razaoSocial: '', nomeFantasia: '', email: '', telefone: '', funcionarios: '1-10' })
  }

  return (
    <main className="min-h-screen bg-brand-navy text-brand-cream relative">

      {/* Navbar Invertida */}
      <nav className="sticky top-0 z-50 border-b border-brand-gray-200 bg-[#F2F2F0] shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Neksti"
            width={140}
            height={36}
            priority
            className="h-9 w-auto brightness-0"
          />
          <div className="hidden md:flex items-center gap-2 text-sm font-bold">
            <a href="#servicos" className="px-5 py-2.5 rounded-full text-[#0D1B2E] hover:bg-[#0D1B2E] hover:text-[#F8F7F4] transition-all">Serviços</a>
            <a href="#pacotes" className="px-5 py-2.5 rounded-full text-[#0D1B2E] hover:bg-[#0D1B2E] hover:text-[#F8F7F4] transition-all">Pacotes</a>
            <a href="#contato" className="px-5 py-2.5 rounded-full text-[#0D1B2E] hover:bg-[#0D1B2E] hover:text-[#F8F7F4] transition-all">Contato</a>
          </div>
          <a
            href="#contato"
            className="bg-[#2D6E45] hover:bg-[#3D8A58] text-brand-cream text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-lg"
          >
            Falar Conosco
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-28 text-center">
        <span className="inline-block bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wider uppercase">
          Tecnologia &amp; Marketing Digital
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 font-display">
          A tecnologia que
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6DBF8A] to-[#2D6E45]">
            impulsiona negócios
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-brand-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed border-l-4 border-[#2D6E45] pl-6 text-left">
          Consultoria especializada em sistemas embarcados e marketing digital de alta performance para a sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pacotes" className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-lt text-brand-cream font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-brand-green/20">
            Ver Pacotes <ArrowRight size={20} />
          </a>
          <a href="#servicos" className="inline-flex items-center justify-center gap-2 border border-brand-green/40 text-brand-mint hover:bg-brand-green/10 font-bold py-4 px-8 rounded-full transition-all">
            Serviços Individuais
          </a>
        </div>
      </section>

      {/* Individual Services */}
      <section id="servicos" className="py-24 bg-[#11233A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Serviços Individuais
            </span>
            <h2 className="text-4xl font-extrabold font-display">Soluções sob medida para o seu negócio</h2>
            <p className="text-brand-gray-100 mt-4 max-w-2xl mx-auto">Escolha exatamente o que você precisa. Cada serviço é configurado por nossos especialistas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {individualServices.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="group p-5 bg-brand-navy hover:bg-[#192D4A] rounded-2xl border border-white/5 hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-1">
                <Icon className={`${color} mb-4`} size={34} />
                <h3 className="font-bold text-base mb-1 leading-snug text-brand-cream font-display">{label}</h3>
                <p className="text-brand-gray-100 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pacotes" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Pacotes Estratégicos
            </span>
            <h2 className="text-4xl font-extrabold font-display">A Oferta Irresistível</h2>
            <p className="text-brand-gray-100 mt-4 max-w-2xl mx-auto">Combinamos os serviços mais poderosos em pacotes estratégicos. Mais resultado, com muito mais economia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col p-6 rounded-2xl border ${pkg.accent} bg-gradient-to-b ${pkg.gradient} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-green/10 ${pkg.highlight ? 'ring-2 ring-brand-green' : ''}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-green font-display text-brand-cream text-xs font-bold px-4 py-1 rounded-full shadow">
                    MAIS POPULAR
                  </div>
                )}
                <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Package size={20} className="text-brand-mint" />
                </div>
                <h3 className="text-xl font-extrabold mb-1 font-display text-brand-cream">{pkg.name}</h3>
                <p className="text-brand-gray-100 text-sm mb-5">{pkg.subtitle}</p>
                <ul className="space-y-2.5 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-gray-100">
                      <CheckCircle size={16} className="text-brand-green mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contato" className={`mt-6 block text-center py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r ${pkg.btnGradient} text-brand-cream hover:opacity-90 transition-opacity`}>
                  Solicitar Proposta
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 bg-[#11233A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Contato
            </span>
            <h2 className="text-4xl font-extrabold font-display">Fale com nosso time</h2>
            <p className="text-brand-gray-100 mt-4">Escolha a área ideal para o seu atendimento e fale com especialistas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contacts.map(({ icon: Icon, label, number }) => (
              <button
                key={label}
                onClick={() => handleOpenContact(number)}
                className="flex flex-col items-center text-center p-8 bg-brand-navy rounded-2xl border border-white/5 hover:border-brand-green/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-green/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-brand-green" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 font-display">{label}</h3>
                <span className="inline-flex items-center gap-2 bg-brand-green group-hover:bg-brand-green-lt text-brand-cream font-bold py-2.5 px-6 rounded-full text-sm transition-all shadow-lg w-full justify-center">
                  <Rocket size={16} /> Preencher Dados
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-gray-200 py-10 bg-[#F2F2F0]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/logo.png"
            alt="Neksti"
            width={120}
            height={31}
            className="h-8 w-auto brightness-0"
          />
          <div className="flex gap-6">
            <a href="#servicos" className="text-[#0D1B2E] font-bold hover:text-[#2D6E45] transition-colors">Serviços</a>
            <a href="#pacotes" className="text-[#0D1B2E] font-bold hover:text-[#2D6E45] transition-colors">Pacotes</a>
            <a href="#contato" className="text-[#0D1B2E] font-bold hover:text-[#2D6E45] transition-colors">Contato</a>
          </div>
          <p className="text-[#0D1B2E] text-sm font-bold">© {new Date().getFullYear()} Neksti. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modal / Formulário */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/90 backdrop-blur-sm overflow-y-auto">
          <div className="bg-brand-cream text-brand-navy w-full max-w-lg rounded-2xl shadow-2xl relative p-6 md:p-8 my-8">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-brand-gray-600 hover:text-brand-navy hover:bg-brand-gray-200 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-extrabold mb-2 font-display">Mais um passo...</h3>
            <p className="text-brand-gray-600 text-sm mb-6 font-medium">Preencha os dados abaixo rapidamente antes de ser direcionado ao WhatsApp da nossa equipe.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-brand-gray-600">Nome Completo</label>
                <input required type="text" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} className="w-full bg-white border border-brand-gray-200 rounded-lg px-4 py-2.5 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-brand-gray-600">Razão Social</label>
                  <input required type="text" value={formData.razaoSocial} onChange={e => setFormData({...formData, razaoSocial: e.target.value})} className="w-full bg-white border border-brand-gray-200 rounded-lg px-4 py-2.5 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-brand-gray-600">Nome Fantasia</label>
                  <input required type="text" value={formData.nomeFantasia} onChange={e => setFormData({...formData, nomeFantasia: e.target.value})} className="w-full bg-white border border-brand-gray-200 rounded-lg px-4 py-2.5 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-brand-gray-600">E-mail Corporativo</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-brand-gray-200 rounded-lg px-4 py-2.5 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-brand-gray-600">Telefone / Celular</label>
                  <input required type="tel" value={formData.telefone} onChange={e => setFormData({...formData, telefone: e.target.value})} className="w-full bg-white border border-brand-gray-200 rounded-lg px-4 py-2.5 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-brand-gray-600">Funcionários na Empresa</label>
                <select required value={formData.funcionarios} onChange={e => setFormData({...formData, funcionarios: e.target.value})} className="w-full bg-white border border-brand-gray-200 rounded-lg px-4 py-2.5 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green font-medium">
                  <option value="1-10">1 a 10 funcionários</option>
                  <option value="11-50">11 a 50 funcionários</option>
                  <option value="51-100">51 a 100 funcionários</option>
                  <option value="101-200">101 a 200 funcionários</option>
                  <option value="201-500">201 a 500 funcionários</option>
                  <option value="501-1000">501 a 1000 funcionários</option>
                  <option value="+1000">+1000 funcionários</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-brand-green hover:bg-brand-green-lt text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-brand-green/30 mt-6 flex items-center justify-center gap-2">
                <Smartphone size={18} /> Iniciar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  )
}