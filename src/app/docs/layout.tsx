'use client'

import Sidebar from '@/components/docs/Sidebar'
import DocsBackground from '@/components/docs/DocsBackground'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-primary">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <DocsBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="md:pl-64 pt-16 md:pt-0">
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
