const fileInput = document.getElementById('fileinput');
const saidaResult = document.getElementById('saidaResult');

function showResult(){
  fileInput.addEventListener('change', function(event){
    const file = event.target.files[0];
    
console.log(file.name); 
  })
}