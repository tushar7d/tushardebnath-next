
export default function RootLayout({ children }) {
  return (
    <div className="flex w-[calc(100vw-80px)]  ">
      <div className="w-[300px] border-r h-screen sticky top-0">
        hello
      </div>
     {children}
    </div>
  )
}
