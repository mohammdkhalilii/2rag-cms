import type { Metadata } from 'next'
import './(frontend)/globals.css'
import './(frontend)/index.css'
import './assets/fonts/fonts.css'

export const metadata: Metadata = {
  title: '2rag Platform',
  description: '2rag Studio website and CMS platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
