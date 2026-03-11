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
  Check,
  Share2,
  CalendarDays,
  Megaphone,
  Wallet,
  Link,
  Target,
  Menu,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
          
          <div className="flex items-center gap-4">
            <button onClick={() => handleOpenContact('5519982185983')} className="bg-[#2D6E45] hover:bg-[#3D8A58] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-md hidden sm:block">
              Falar Conosco
            </button>
            {/* Menu Mobile Toggle */}
            <button 
              className="md:hidden text-[#0D1B2E] p-1 focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-gray-200 bg-[#F2F2F0] px-6 py-6 flex flex-col gap-4 shadow-xl absolute w-full left-0 top-full animate-in slide-in-from-top-2">
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-[#0D1B2E] font-bold text-lg py-3 border-b border-gray-300 hover:text-[#2D6E45]">Serviços</a>
            <a href="#pacotes" onClick={() => setMobileMenuOpen(false)} className="text-[#0D1B2E] font-bold text-lg py-3 border-b border-gray-300 hover:text-[#2D6E45]">Pacotes</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-[#0D1B2E] font-bold text-lg py-3 border-b border-gray-300 hover:text-[#2D6E45]">Contato</a>
            <button onClick={() => { handleOpenContact('5519982185983'); setMobileMenuOpen(false); }} className="bg-[#2D6E45] hover:bg-[#3D8A58] text-white px-6 py-4 rounded-xl font-bold text-center mt-4 w-full text-lg shadow-md">
              Falar Conosco
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 md:py-28 text-center">
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
        <p className="text-lg md:text-xl lg:text-2xl text-brand-gray-100 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed border-l-4 md:border-l-0 border-[#2D6E45] pl-6 md:pl-0 text-left md:text-center">
          Enquanto outras plataformas apenas organizam o seu WhatsApp, a Neksti é o motor de vendas completo da sua empresa. Capturamos o lead do Instagram/Google, qualificamos com Inteligência Artificial, agendamos a reunião, enviamos lembretes e cobramos via Stripe. Tudo isso sem intervenção humana.
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
      <section id="servicos" className="py-16 md:py-24 bg-[#11233A]">
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
      <section id="pacotes" className="py-16 md:py-24">
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

      {/* Integrations */}
      <section className="py-16 md:py-24 bg-brand-navy relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-[#2D6E45]/20 text-[#6DBF8A] text-sm font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase border border-[#2D6E45]/40">
              Ecossistema Fechado
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-6">
              A Neksti se conecta com as ferramentas que você já usa. Tudo em uma única tela.
            </h2>
            <p className="text-xl text-brand-gray-100 leading-relaxed">
              Chega de pular de aba em aba. Integre seus canais de aquisição, redes sociais e meios de pagamento em um único Hub de Vendas.
            </p>
          </div>

          {/* Marquee de Logos de Integração */}
          <div className="relative w-full overflow-hidden flex items-center mb-16 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-brand-navy before:to-transparent before:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-brand-navy after:to-transparent after:pointer-events-none">
            <div className="flex animate-marquee w-max items-center whitespace-nowrap">
              {/* O conjunto de logos precisa ser duplicado para o loop infinito funcionar de forma suave */}
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex shrink-0 items-center justify-center gap-16 px-8">
                  <Image src="/logos/tiktok.png" alt="TikTok" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/quickbooks.png" alt="QuickBooks" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/linkedin.png" alt="LinkedIn" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/google.png" alt="Google" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/slack.png" alt="Slack" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/shippo.png" alt="Shippo" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/instagram.png" alt="Instagram" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/woocommerce.png" alt="WooCommerce" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/google-my-business.png" alt="Google My Business" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/printful.png" alt="Printful" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/xero.png" alt="Xero" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/zapier.png" alt="Zapier" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/whatsapp.png" alt="WhatsApp" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/wave.png" alt="Wave" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/facebook.png" alt="Facebook" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/clio.png" alt="Clio" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/shopify.png" alt="Shopify" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                  <Image src="/logos/stripe.png" alt="Stripe" width={140} height={50} className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#192D4A] to-[#0D1B2E] p-8 rounded-2xl border border-[#2D6E45]/40 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold font-display text-brand-cream mb-3 flex items-center gap-3">
                <Link className="text-[#6DBF8A]" /> A Integração Coringa
              </h3>
              <p className="text-brand-gray-100 text-sm leading-relaxed">
                Com nossos Webhooks e apps oficiais em conectores como <strong>Zapier</strong> e <strong>Make (Integromat)</strong>, você conecta a Neksti a mais de 3.000 ferramentas do mercado brasileiro e global de forma instantânea (Hotmart, Kiwify, Eduzz, RD Station, ActiveCampaign, ERPs e muito mais).
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <div className="px-6 py-3 bg-[#11233A] rounded-xl border border-[#2D6E45]/40 font-bold tracking-wide text-[#6DBF8A] text-sm">ZAPIER</div>
              <div className="px-6 py-3 bg-[#11233A] rounded-xl border border-[#2D6E45]/40 font-bold tracking-wide text-[#6DBF8A] text-sm">MAKE</div>
            </div>
          </div>

        </div>
      </section>

      {/* Motor de Vendas Completo (A Neksti é para mim?) */}
      <section className="py-16 md:py-24 bg-black border-t border-neutral-900 relative">
        <div className="container mx-auto px-6">
          
          {/* PARTE 1: Gatilhos de Identificacao */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#2D6E45]/10 border border-[#2D6E45]/30 text-[#6DBF8A] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
                Para quem é
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white">
                A Neksti é para mim?
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-900 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-neutral-800 transition-colors">
                <div className="bg-red-500/10 p-3 rounded-xl shrink-0 mt-1 flex items-center justify-center">
                  <X className="text-red-400" size={28} />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-neutral-400 text-lg lg:text-xl font-medium leading-relaxed">
                    Seus leads esfriam por falta de acompanhamento rápido no WhatsApp?
                  </p>
                </div>
                <div className="font-bold text-[#6DBF8A] flex items-center justify-center md:justify-end gap-2 shrink-0 md:mt-1">
                  <CheckCircle size={20} /> Então sim.
                </div>
              </div>

              <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-900 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-neutral-800 transition-colors">
                <div className="bg-red-500/10 p-3 rounded-xl shrink-0 mt-1 flex items-center justify-center">
                  <X className="text-red-400" size={28} />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-neutral-400 text-lg lg:text-xl font-medium leading-relaxed">
                    Você paga várias ferramentas separadas (CRM, E-mail, Agendamento) e elas não se conversam?
                  </p>
                </div>
                <div className="font-bold text-[#6DBF8A] flex items-center justify-center md:justify-end gap-2 shrink-0 md:mt-1">
                  <CheckCircle size={20} /> Então sim.
                </div>
              </div>

              <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-900 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-neutral-800 transition-colors">
                <div className="bg-red-500/10 p-3 rounded-xl shrink-0 mt-1 flex items-center justify-center">
                  <X className="text-red-400" size={28} />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-neutral-400 text-lg lg:text-xl font-medium leading-relaxed">
                    Seu time perde vendas porque esquece de fazer o follow-up?
                  </p>
                </div>
                <div className="font-bold text-[#6DBF8A] flex items-center justify-center md:justify-end gap-2 shrink-0 md:mt-1">
                  <CheckCircle size={20} /> Então sim.
                </div>
              </div>

              <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-900 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-neutral-800 transition-colors">
                <div className="bg-brand-green/10 p-3 rounded-xl shrink-0 mt-1 flex items-center justify-center border border-brand-green/20">
                  <Target className="text-brand-green" size={28} />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-neutral-400 text-lg lg:text-xl font-medium leading-relaxed">
                    Você quer captar leads no automático direto do Instagram e Google Ads?
                  </p>
                </div>
                <div className="font-bold text-[#6DBF8A] flex items-center justify-center md:justify-end gap-2 shrink-0 md:mt-1">
                  <CheckCircle size={20} /> Então sim.
                </div>
              </div>
            </div>
          </div>

          {/* PARTE 2: Nossos Diferenciais */}
          <div>
            <div className="max-w-4xl mx-auto mb-20 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2D6E45]/20 to-transparent blur-3xl opacity-50 -z-10"></div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white text-center italic leading-relaxed p-8 md:p-12 border-l-4 border-[#2D6E45] bg-neutral-950/80 backdrop-blur-sm rounded-r-2xl border-y border-r border-neutral-900">
                "Enquanto outras plataformas apenas organizam o seu WhatsApp, a Neksti é o motor de vendas completo da sua empresa. Capturamos o lead, qualificamos com Inteligência Artificial, agendamos a reunião e enviamos o link de cobrança. Tudo em uma <span className="text-[#6DBF8A] font-bold">única tela.</span>"
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-8 border border-neutral-800 text-white group-hover:bg-[#2D6E45]/20 group-hover:border-[#2D6E45]/50 group-hover:text-[#6DBF8A] transition-colors">
                  <Bot size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Atendimento com IA</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Qualifique leads 24/7 de forma humanizada, antes mesmo de chegar ao seu vendedor.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-8 border border-neutral-800 text-white group-hover:bg-[#2D6E45]/20 group-hover:border-[#2D6E45]/50 group-hover:text-[#6DBF8A] transition-colors">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agendamentos Automáticos</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Sincronização bidirecional com Google Calendar. Chega de perguntar "qual o melhor horário?".
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-8 border border-neutral-800 text-white group-hover:bg-[#2D6E45]/20 group-hover:border-[#2D6E45]/50 group-hover:text-[#6DBF8A] transition-colors">
                  <CreditCard size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cobrança Nativa</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Integração com Stripe para enviar links de pagamento e PIX direto no chat.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-8 border border-neutral-800 text-white group-hover:bg-[#2D6E45]/20 group-hover:border-[#2D6E45]/50 group-hover:text-[#6DBF8A] transition-colors">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">CRM Multicanal</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  WhatsApp API Oficial, Instagram Direct e Messenger centralizados em um funil Kanban.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-8 border border-neutral-800 text-white group-hover:bg-[#2D6E45]/20 group-hover:border-[#2D6E45]/50 group-hover:text-[#6DBF8A] transition-colors">
                  <Megaphone size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Marketing & Disparos</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  E-mail marketing, SMS e disparos em massa no WhatsApp com baixo risco de bloqueio.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-8 border border-neutral-800 text-white group-hover:bg-[#2D6E45]/20 group-hover:border-[#2D6E45]/50 group-hover:text-[#6DBF8A] transition-colors">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automação Infinita</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Crie fluxos complexos para recuperação de carrinho, lembretes de consulta e follow-ups automáticos.
                </p>
              </div>
            </div>
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