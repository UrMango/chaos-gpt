import '../styles/globals.css'
import Sidebar from '../components/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='overflow-hidden w-full h-full relative'>
        <div className='flex'>
          {/* Sidebar */}
          <Sidebar />
          {/* Upper Notifications */}
          <div className='flex-1'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
