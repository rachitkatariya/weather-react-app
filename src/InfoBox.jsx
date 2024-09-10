import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon  from "@mui/icons-material/Thunderstorm";
import AcUnitIcon  from "@mui/icons-material/AcUnit";
import WbSunnyIcon  from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  // const img = "./src/assets/dust.jpg";
  const hotWeather = './public/assets/hotWeather.jpg';
  const coldWeather = './public/assets/coldWeather.webp';
  const rainWeather = './public/assets/rainWeather.jpg';
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rainWeather
                : info.temp > 15
                ? hotWeather
                : coldWeather
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}</p>
              <p>Max Temp = {info.tempMax}</p>
              <p>Max Temp = {info.tempMax}</p>
              <p>
                The weather can be described as <b>{info.weather}</b> feels like{" "}
                {info.feelslike}&deg;
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
