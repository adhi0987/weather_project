/*const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79b3061e8fmsh266b509b00ca7e7p1bb291jsnbf2d6bc92687',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function weather(city)
{


try {
	const response =   await fetch(url+city, options);
	const result = await response.text();
	console.log(result);
	temp.innerHTML=response.location["name"]

} catch (error) {
	console.error(error);
}
}
but.addEventListener("click",(e)=>{
	e.preventDefault();
	city.innerHTML=cityName.value;
	weather(cityName.value);
	
})
weather("kakinada");*/
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
method: 'GET',
headers: {
'content-type': 'application/octet-stream',
'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};
async function weather(city)
{
fetch(url+city, options)
.then(response => response.json())
.then(response => 
	{
		temp.innerHTML=response.temp;
		min_temp.innerHTML=response.min_temp;
		max_temp.innerHTML=response.max_temp;
		feels.innerHTML=response.feels_like;
		Humidity.innerHTML=response.humidity;
		wind_dir.innerHTML=response.wind_degrees;
		wind_speed.innerHTML=response.wind_speed;
		console.log(response)})


.catch(err => console.error(err));
}
but.addEventListener("click",(e)=>{
	e.preventDefault();
	city.innerHTML=cityName.value;
	weather(cityName.value);
	
})
weather("delhi");
/*async function weather_k(city)
{
	fetch(url+city,options)
	.then(response =>response.json())
	.then(response =>
		{
			temp_1.innerHTML=response.temp;
			hum_1.innerHTML=response.humidity;
			feels_1.innerHTML=response.feels_like;
		})
}
weather_k("kakinada");
async function weather_ko(city)
{
	fetch(url+city,options)
	.then(response =>response.json())
	.then(response =>
		{
			temp_2.innerHTML=response.temp;
			hum_2.innerHTML=response.humidity;
			feels_2.innerHTML=response.feels_like;
		})
}
weather_ko("kolkata");*/
async function weather_d(city)
{
	fetch(url+city,options)
	.then(response =>response.json())
	.then(response =>
		{
			temp_3.innerHTML=response.temp;
			hum_3.innerHTML=response.humidity;
			feels_3.innerHTML=response.feels_like;
		})
}
weather_d("Delhi");
async function weather_b(city)
{
	fetch(url+city,options)
	.then(response =>response.json())
	.then(response =>
		{
			temp_4.innerHTML=response.temp;
			hum_4.innerHTML=response.humidity;
			feels_4.innerHTML=response.feels_like;
		})
}
weather_b("Bangalore");
async function weather_m(city)
{
	fetch(url+city,options)
	.then(response =>response.json())
	.then(response =>
		{
			temp_5.innerHTML=response.temp;
			hum_5.innerHTML=response.humidity;
			feels_5.innerHTML=response.feels_like;
		})
}
weather_m("chennai");
async function weather_bb(city)
{
	fetch(url+city,options)
	.then(response =>response.json())
	.then(response =>
		{
			temp_6.innerHTML=response.temp;
			hum_6.innerHTML=response.humidity;
			feels_6.innerHTML=response.feels_like;
		})
}
weather_bb("mumbai");
weather("delhi");