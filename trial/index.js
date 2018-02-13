function myFunction(number){
     link = "https://api.whatsapp.com/send?phone=" + number + "&text=" + document.getElementById('message').value;
     console.log(link);
     window.open(link,'_blank');
 }