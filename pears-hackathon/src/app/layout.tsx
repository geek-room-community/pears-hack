import './globals.css'
import NavigationWheel from './components/NavigationWheel'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" min-h-screen bg-gradient-to-r from-[#171717] to-[#000000] ">
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