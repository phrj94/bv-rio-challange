import instance from "./instance";

const getLatLonByCity = async (city) => {
    try {
        const res = await instance.get(`/weather?q=${city}&appid=${localStorage.appId}&units=metric&lang=pt_br`);
        return res.data.coord;
    } catch (error) {
        console.error('Something wrong to get lat and long to this city: ', error)
    }

}

export const getForecastWeatherByCity = async (city) => {
    try {
        const { lat, lon } = await getLatLonByCity(city)
        const res = await instance.get(`/onecall?lat=${lat}&lon=${lon}&appid=${localStorage.appId}&lang=pt_br&units=metric&exclude=minutely,hourly`);
        return res.data;
    } catch (error) {
        console.error('Something wrong to get forecast weather to this city: ', error)
    }

}

