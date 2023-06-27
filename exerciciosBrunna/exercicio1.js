let nomes = ['jean', 'bruna', 'ronaldo', 'daiana']
let idades = ['22', '19', '43', '38']
 
for(i = 0; i < nomes.length; i = i+1){
  
  
  if(idades[i] < 25)
  {
    console.log(nomes[i]+ ' ' + idades[i] + ' é velho')
  } 
  else 
  {
    console.log(nomes[i]+ ' ' + idades[i] + ' é novo')
  }

}
