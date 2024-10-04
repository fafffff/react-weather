import axios from "axios";
import { Audio } from "react-loader-spinner";
export default function Weather(props) {
  function handleEvent(response) {
    alert(
      `the temprature in ${response.data.name}  is ${response.data.main.temp}`
    );
    console.log(response.data.name);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=ec02069563b867e248ad2639fc684c7e`;
  axios.get(url).then(handleEvent);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
