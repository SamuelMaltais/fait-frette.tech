import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import {loadFull} from 'tsparticles'

function Snow() {
    const [count, setCount] = useState(0)
    const init  = useCallback(async (engine) =>{
        await loadFull(engine) 
    })


    return(
        <div>
        <Particles options={{
            particles:{
                color:{
                    value: 'fff'
                },
                number: {
                    value:100
                },
                opacity: {
                    value: {min:0.5, max: 1}
                },
                shape: {
                    type: "circle"
                },
                size: {
                  value: {min:1, max:4}
                },
                move: {
                    direction: "bottom-right",
                    enable: true,
                    speed: {min:2, max:4},
                    straight: true
                }
                
            }
        }} init={init} />
        </div>
    )
}

export default Snow;