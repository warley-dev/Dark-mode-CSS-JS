var clearcolor = '#ffffff'
var darkcolor = '#141414'

if(localStorage.getItem('idmode')==null){
    document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
}
  
  const nightMode = document.querySelector('#darkmod')
  nightMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkmode')
    
    if (document.documentElement.classList.contains('darkmode')) {
      localStorage.setItem('idmode', true)
      document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
      document.querySelector("[name='theme-color']").remove() 
      return
    }

    localStorage.removeItem('idmode')
    document.querySelector("[name='theme-color']").remove()
    document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
  })
  
  const nightModeStorage = localStorage.getItem('idmode')
  if (nightModeStorage) {
      document.documentElement.classList.add('darkmode')
      document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`    
      nightMode.checked = true
  }
  