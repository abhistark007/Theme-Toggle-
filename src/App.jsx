
import './App.css'
import useLocalStorage from './useLocalStorage'

function App() {

  const [theme,setTheme]=useLocalStorage('theme','dark');

  function handleToggleTheme(){
    setTheme(theme==='light'? 'dark':'light');
  }

  console.log(theme);


  return (
   <div className='light-dark-mode min-h-screen w-full flex justify-center items-center' data-theme={theme}>
    <div className='flex flex-col gap-2'>
      <p className='text-3xl'>Hello World!</p>
      <button 
      onClick={handleToggleTheme}
      className='shadow-lg rounded-md p-2 font-bold text-3xl border-4'>Change Theme</button>
    </div>
   </div>
  )
}

export default App
