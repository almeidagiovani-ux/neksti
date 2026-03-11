import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Neksti | O Motor de Vendas da sua Empresa',
    description: 'Transforme o seu atendimento em uma verdadeira máquina de vendas automatizada. A Neksti centraliza WhatsApp, IA, Agendamentos e Cobranças em um único ecossistema.',
    keywords: ['Automação de Vendas', 'WhatsApp API Oficial', 'CRM Multicanal', 'Agendamentos Automáticos', 'Inteligência Artificial de Vendas', 'Sistema de Atendimento', 'GoHighLevel Brasil'],
    authors: [{ name: 'Neksti' }],
    creator: 'Neksti',
    publisher: 'Neksti',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'Neksti | Hub de Vendas e Marketing Automatizado',
        description: 'Venda no automático captando, qualificando por IA, agendando e cobrando em uma única dela. Integração oficial e sem bloqueios.',
        url: 'https://seusite.neksti.com.br', // Replace with the actual URL when deploying
        siteName: 'Neksti',
        images: [
            {
                url: '/logo.png', // Ideally a high-res cover image like /og-image.jpg
                width: 1200,
                height: 630,
                alt: 'Neksti - Motor de Vendas',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Neksti | O Motor de Vendas da sua Empresa',
        description: 'Centralize e automatize todo o seu processo comercial: captação, relacionamento e vendas.',
        images: ['/logo.png'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    )
}