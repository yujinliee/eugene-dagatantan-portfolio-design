import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eugene Dagatantan — Web Designer & Web Developer',
  title: 'Eugene Dagatantan | Web Designer & Web Developer',
  description: 'Eugene Dagatantan is a web designer and web developer creating clean, responsive, and user-friendly digital experiences.',
  keywords: ['Eugene Dagatantan', 'Eugene Dagatantan portfolio', 'Eugene web developer', 'Eugene web designer', 'web designer', 'web developer', 'UI UX designer', 'portfolio', 'frontend development'],
  authors: [{ name: 'Eugene Dagatantan' }],
  creator: 'Eugene Dagatantan',
  publisher: 'Eugene Dagatantan',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  generator: 'v0.app',
  icons: {
    icon: '/ff3f72cf-8933-4820-958a-90c15b8f1502.png',
    shortcut: '/ff3f72cf-8933-4820-958a-90c15b8f1502.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Eugene Dagatantan | Web Designer & Web Developer',
    description: 'Eugene Dagatantan is a web designer and web developer creating clean, responsive, and user-friendly digital experiences.',
    type: 'website',
    siteName: 'Eugene Dagatantan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eugene Dagatantan | Web Designer & Web Developer',
    description: 'Eugene Dagatantan is a web designer and web developer creating clean, responsive, and user-friendly digital experiences.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Person', name: 'Eugene Dagatantan',
          jobTitle: 'Web Designer and Web Developer', email: 'mailto:edagatantan@gmail.com',
          sameAs: ['https://www.facebook.com/eugenedagatantan24', 'https://www.linkedin.com/in/edagatantan', 'https://github.com/yujinliee'],
        }) }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
