function saludar (nombre){
  console.log ("hola "+nombre)
}
saludar ("Matias")

calculo=(num,num2,callback) =>{
  var resultado=num+num2
  callback(resultado)
}
calcular=(edad,edad2)=>{
  calculo(edad,edad2,(x)=> {console.log (x)})
}
// calcular(10)
