    // let data = fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5e214bb85bd2001095bef3c94d75bc58");
    // console.log(data);

    let city_search = document.getElementsByClassName("city_search")[0];
    let search_button = document.getElementsByClassName("search_button")[0];
    let city ="";
    let weather_img = document.getElementsByClassName("weather_img")[0];
    let temprature = document.getElementsByClassName("temprature")[0];
    let city_name = document.getElementsByClassName("city_name")[0];
    let hum_val = document.getElementsByClassName('hum_val')[0];
    let win_val = document.getElementsByClassName('win_val')[0];
    let card_main = document.getElementsByClassName("card_main")[0];
    let card_footer = document.getElementsByClassName("card_footer")[0];
    let buttonaction = ()=>
    {
       
                city = city_search.value;
        console.log(city)
        let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        let apikey = "&appid=5e214bb85bd2001095bef3c94d75bc58" 
        url = url + city + apikey;
        console.log(url);
    
    
          fetch(url)
        .then((response)=>
        {
        return response.json()
        }).then((r)=>
        {
            
            console.log(r);
            city_search.value ="";
            let wil = "images/"+`${r.weather[0].main}` + ".png"
            weather_img.src = wil;
            temprature.innerHTML = `${r.main.temp}°C`
            win_val.innerHTML = `${r.wind.speed}`;
            city_name.innerHTML = `${r.name}`
            hum_val.innerHTML = `${r.main.humidity}%`
            card_main.style.display = "flex";
            card_footer.style.display = "flex";
            
        })
        .catch(
            (e)=>
            {
                throw (e);
            }
        )
    
    }
    card_main.style.display = "none";
    card_footer.style.display = "none";
    search_button.addEventListener('click',()=>
        {
          buttonaction();
        });
    city_search.addEventListener('keydown', (e)=>
{
    if(e.key==='Enter')
    {
    buttonaction();
    }
});
        // win_val.innerHTML="hello";
           
    // async function fetchreport(url)
    // {
    //     let data;
    //     await fetch(url).then(
    //         (response)=>
    //         {
    //             data = response; 
    //         }
    //     ).catch(
    //         (e)=>
    //         {
    //             throw(e)
    //         }
    //     )
    //     if(!data.ok)
    //     {
    //         // console.log(res);
    //         throw console.error("sorry");
    //     }
        
    //     // let res = await data.json();
    //     console.log(await data.json());
    // }
    // fetchreport(url)
