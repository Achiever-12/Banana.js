//© Achiever

function _(selector){ 
let self=document.querySelector(selector);

 self.text=function(text){
 if(text){
     self.innerTEXT=text;
 }
 return self.innerTEXT;
 } 
 self.html=function(){
     return self.innerHTML;
 }
 return self
}
