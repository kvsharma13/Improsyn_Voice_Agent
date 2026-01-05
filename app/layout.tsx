import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PharMed AI - Pharmaceutical Assistant',
  description: 'Secure AI-powered pharmaceutical voice agent platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: '/pharmed-logo.png',
          logoPlacement: 'inside',
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'blockButton',
        },
        variables: {
          colorPrimary: '#0073C6',
          colorDanger: '#dc2626',
          colorSuccess: '#16a34a',
          colorWarning: '#ea580c',
          colorTextOnPrimaryBackground: '#ffffff',
          colorBackground: '#ffffff',
          colorInputBackground: '#f8fafc',
          colorInputText: '#1e293b',
          fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
          borderRadius: '0.75rem',
        },
        elements: {
          formButtonPrimary: {
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'none',
            backgroundColor: '#0073C6',
            color: '#ffffff',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            '&:hover': {
              backgroundColor: '#005a9e',
            },
            '&:focus': {
              backgroundColor: '#005a9e',
              boxShadow: '0 0 0 3px rgba(0, 115, 198, 0.3)',
            },
          },
          card: {
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0',
            backgroundColor: '#ffffff',
          },
          headerTitle: {
            color: '#0073C6',
            fontWeight: '700',
            fontSize: '1.5rem',
          },
          headerSubtitle: {
            color: '#64748b',
            fontSize: '0.875rem',
          },
          socialButtonsBlockButton: {
            border: '1px solid #e2e8f0',
            backgroundColor: '#ffffff',
            '&:hover': {
              borderColor: '#0073C6',
              backgroundColor: '#f1f5f9',
            },
          },
          formFieldInput: {
            borderColor: '#cbd5e1',
            backgroundColor: '#f8fafc',
            '&:focus': {
              borderColor: '#0073C6',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 0 3px rgba(0, 115, 198, 0.1)',
            },
          },
          dividerLine: {
            backgroundColor: '#e2e8f0',
          },
          dividerText: {
            color: '#64748b',
            fontSize: '0.75rem',
          },
          userButtonPopoverCard: {
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            borderRadius: '0.75rem',
          },
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
