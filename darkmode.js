themeColorClear = "#ffffff"
themeColorDark = "#191919"

const nightMode = document.querySelector('#darkmod')
const nightModeStorage = localStorage.getItem('idmode')

  nightMode.addEventListener('click', () => {
      document.documentElement.classList.toggle('darkmode')      
      if(document.documentElement.classList.contains('darkmode')) {
        localStorage.setItem('idmode', true)       
        document.querySelector("[name='theme-color']").content = themeColorClear;  
        return
      }
      localStorage.removeItem('idmode')   
      document.querySelector("[name='theme-color']").content = themeColorDark;   
  })    
  
  if(nightModeStorage) {
      document.documentElement.classList.add('darkmode')     
      nightMode.checked = true    
      document.querySelector("[name='theme-color']").content = themeColorClear;  
  }
  