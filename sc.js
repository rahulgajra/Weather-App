const apiurl="https://api.openweathermap.org/data/2.5/weather?q="; 
const apikey="16320ce7aacda8a70b5cb5ae0ed7e064";
const searchbox=document.querySelector(".form1 input"); 
const searchbtn=document.querySelector(".form1 button");  
const ciity=document.querySelector(".fourth_h"); 
const temp=document.querySelector(".th");  
const shh=document.querySelector(".sh"); 
const hyy=document.querySelector(".fifth_h"); 
const wdd=document.querySelector(".six_h"); 
const imgg=document.querySelector(".img2"); 
const rooff=document.querySelector(".roof")
const turn=0;
async function check(city)  
{   
    
    try {
     
    const responce= await fetch(apiurl+city+`&appid=${apikey}`); 
    const data= await responce.json(); 
    console.log(data);
    ciity.innerHTML=data.name; 
    temp.innerHTML=Math.floor(data.main.temp-273)+"°C";   
    hyy.innerHTML="==>"+data.main.humidity+"%";
    wdd.innerHTML="+"+data.wind.speed+": KMPH";  
    shh.innerHTML=data.weather[0].main;
    if(data.weather[0].main==='Clouds') 
    { 
        imgg.src="cloudy.png"; 
         
    } 
    else if(data.weather[0].main==='Haze') 
    { 
        imgg.src="haze.png"; 
         
    }
    else if(data.weather[0].main==='Smoke') 
    { 
        imgg.src="smoke.png"; 
         
    } 
    else if(data.weather[0].main==='Clear') 
    { 
        imgg.src="clear_day.png"; 
         
    }  

    else if(data.weather[0].main==='Fog') 
    { 
        imgg.src="Fog.png"; 
         
    }  

    else if(data.weather[0].main==='') 
    { 
        imgg.src="cloudy.png"; 
         
    }  

    else if(data.weather[0].main==='Clouds') 
    { 
        imgg.src="cloudy.png"; 
         
    } 
     

    } catch (error) {
        console.log("E:",error);
    }

}

searchbtn.addEventListener("click",()=>{ 
      
         check(searchbox.value);

})
    


