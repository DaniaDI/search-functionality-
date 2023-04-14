fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 const apiKey="716220c4a0c656fa0a1987c670e6dac0";
 const apiUrl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

 const searchBox=document.querySelector(".content .search_bar input");
 const searchBtn=document.querySelector(".content .search_bar button");
 async function checkWeather(city){
      const response= await fetch(apiUrl + city + '&appid=${apiKey}');
      var data =await response.json();
      
      console.log(data);

 }  
 searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);
 })
 checkWeather();