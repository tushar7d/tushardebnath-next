import { useTheme } from 'next-themes'
export default function Header(props) {
    const { theme, setTheme } = useTheme()
    return (
        <div className=" sticky top-0 bg-white dark:bg-page-black  border-b border-solid dark:border-transparent">
          <div className=" flex justify-between items-center max-w-prose mx-auto">
            <div className="flex">
            <h3 className="text-l   ml-4 dark:text-white">Home</h3>
            <h3 className="text-l   ml-12 dark:text-white">About</h3>
            <h3 className="text-l   ml-12 dark:text-white">Portfolio</h3>


            </div>
            
        
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3 dark:text-white"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg></button>
          
          </div>
          </div>
    );
  }
  