function Analizador() {
    // const url = 'https://api.codetabs.com/v1/proxy?quest=https://pastebin.com/raw/Km0tnXYp'
    const Result = document.getElementById('Result')
    let Sou = document.querySelector('select').value    
    fetch('Update.json')
      .then(response => response.json()) 
      .then(data => { 
        let NumberMax = data[Sou]["Aprender"].length
        Result.innerHTML = data[Sou]["Aprender"][Math.floor(Math.random() * NumberMax)] 
      
      })
  }
  
  Analizador()
  