import './globals.css'
import NavigationWheel from './components/NavigationWheel'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <main className="flex">
          <div className="flex-1 p-8">
            {children}
          </div>
          <NavigationWheel />
        </main>
      </body>
    </html>
  )
}