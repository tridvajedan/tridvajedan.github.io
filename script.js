//http://api.weatherapi.com/v1/current.json?key=f2e75fe3db94403e8b5164109232810&q=

function onLoad()
{
    var input = document.getElementById("search");
    input.addEventListener("keypress",function(event) {
        if(event.key === "Enter")
        {
            event.preventDefault();
            document.getElementById("submit").click();
        }
    });
}

async function findCity()
{
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=f2e75fe3db94403e8b5164109232810&q="+document.getElementById("search").value);
    const jsonObject = await response.json();
    document.getElementById("city-name").innerHTML = jsonObject.location.name;
    document.getElementById("city-temp").innerHTML = jsonObject.current.temp_c + "°";
    document.getElementById("wind-value").innerHTML = jsonObject.current.wind_kph;
    document.getElementById("hum-value").innerHTML = jsonObject.current.humidity;
    document.getElementById("cond-image").src = jsonObject.current.condition.icon;

    document.getElementById("result-box").classList.add("appear");
}