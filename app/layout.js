import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="top-container">
        <nav className="nav-container">
          <div>Logo</div>
          <div>Links</div>
          <div>Social</div>
        </nav>
        <main>{children}</main>
       </body>
    </html>
  )
}
