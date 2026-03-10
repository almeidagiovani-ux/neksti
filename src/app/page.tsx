import { ArrowRight, Rocket, Server, Smartphone } from 'lucide-react'

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-50">
            <section className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    Neksti
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
                    Consultoria especializada em sistemas embarcados e marketing digital de alta performance.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 mx-auto">
                    Conheça Nossas Soluções <ArrowRight size={20} />
                </button>
            </section>

            <section className="bg-slate-800 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Soluções de Tecnologia e Marketing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-slate-700 rounded-2xl border border-slate-600">
                            <Smartphone className="text-blue-400 mb-4" size={40} />
                            <h3 className="text-xl font-bold mb-2">Centralização de Atendimento</h3>
                            <p className="text-slate-400">Integração de WhatsApp, IG e FB em uma única plataforma.</p>
                        </div>
                        <div className="p-6 bg-slate-700 rounded-2xl border border-slate-600">
                            <Server className="text-emerald-400 mb-4" size={40} />
                            <h3 className="text-xl font-bold mb-2">Estruturação de CRM</h3>
                            <p className="text-slate-400">Pipelines, listas e automação de vendas completas.</p>
                        </div>
                        <div className="p-6 bg-slate-700 rounded-2xl border border-slate-600">
                            <Rocket className="text-purple-400 mb-4" size={40} />
                            <h3 className="text-xl font-bold mb-2">Implementação de IA</h3>
                            <p className="text-slate-400">Bots inteligentes para texto e atendentes telefônicos por voz.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}