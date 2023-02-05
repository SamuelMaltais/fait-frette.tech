import PlaceIcon from '@mui/icons-material/Place';
import zIndex from '@mui/material/styles/zIndex';
import { positions } from '@mui/system';

function positionPin(province, lng, lat){
var x, y;
if(province == "BC"){
    x= 5.604505574121145*(lng + 139.052827) + 245
    y = -20.007824878420625*(lat + 59.997312) + 330 
}
 if(province == "AB"){   
   x = 8.10997526757739*(lng + 121.9523) + 360
   y = -18.999894830615652*(lat - 58.4557055) + 390
}
if(province == "SK"){
 x = 9.225116637790531*(lng + 112.757) + 445
 y = -15.960369041948567*(lat -49.0214498) + 405
}
if(province == "MB"){
x= 9.958418705766618*(lng + 102.0057) + 550
y = -14.420249968397238*(lat - 59.108935) + 410
}
if(province == "ON"){
x= 12.69904898663432*(lng + 95.395271) + 625
y= -14.285047725141842*(lat - 56.662) + 445
}
if(province == "QC"){
x= 15.03784246875708*(lng - (-77.46693551058253)) + 760
y = -12.934125469386581*(lat - 62.77941) + 340
}
return [x, y]
}




function Pins(props) {
    var pins = []

    for(var i = 0; i<props.cities.length; i++){
        var lat = props.cities[i].lat
        var long = props.cities[i].lng
        var x = Math.abs(positionPin(props.cities[i].province, long, lat)[0])
        var y = Math.abs(positionPin(props.cities[i].province, long, lat)[1])

        var style = {
            position: "absolute",
            top: y - 50,
            left: x,
            transform: "scale(2)",
            zIndex: "20"
        }


        pins.push(
            <PlaceIcon 
            style={style}
            />
        )
    }
    return ( 
    <div>
        {pins}
    </div> 
    );
}

export default Pins;