import {ReactComponent as Alberta} from './Alberta.svg'
import {ReactComponent as BritishC} from './British_Columbia.svg'
import {ReactComponent as Manitoba} from './Manitoba.svg'
import {ReactComponent as NB} from './NB.svg'
import {ReactComponent as Newfoundland} from './Newfoundland.svg'
import {ReactComponent as Northwest} from './Northwest.svg'
import {ReactComponent as NovaS} from './Nova_Scotia.svg'
import {ReactComponent as Nunavut} from './Nunavut.svg'
import {ReactComponent as Ontario} from './Ontario.svg'
import {ReactComponent as Quebec} from './Quebec.svg'
import {ReactComponent as Saskatchewan} from './Saskatchewan.svg'
import {ReactComponent as Yukon} from './Yukon.svg'

var array = [
    <Alberta/>, <BritishC/>, <Manitoba/>, <NB/>, <Newfoundland/>, <Northwest/>, <NovaS/>, <Nunavut/>, <Ontario/>, <Quebec/>, <Saskatchewan/>, <Yukon/>
]


function Canada(props) {
    const makeDisplay = (province) => {
        const list=props.provinceDisplay;
        list.pop();
        list.unshift(province);
        props.setProvinceDisplay(list);
    }
    
    return ( 
        <div className='map-container'>
            <Alberta className= "province Alberta" onClick={() => makeDisplay('Alberta')} />
            <Saskatchewan className="province Saskatchewan" onClick={() => makeDisplay('Saskatchewan')} />
            <BritishC className="province Bc" onClick={() => makeDisplay('British Columbia')} />
            <Manitoba className="province Manitoba" onClick={() => makeDisplay('Manitoba')} />
            <NB className="province Nb" onClick={() => makeDisplay('New Brunswick')} />
            <Newfoundland className="province Newfoundland" onClick={() => makeDisplay('Newfoundland')} />
            <Northwest className="province Northwest" onClick={() => makeDisplay('Northwest Territories')} />
            <NovaS className="province Ns" onClick={() => makeDisplay('Nova Scotia')} />
            <Nunavut className="province Nunavut" onClick={() => makeDisplay('Nunavut')} />
            <Ontario className="province Ontario" onClick={() => makeDisplay('Ontario')} />
            <Quebec className="province Quebec" onClick={() => makeDisplay('Quebec')} />
            <Yukon className="province Yukon" onClick={() => makeDisplay('Yukon')} />
        </div>
     );
}

export default Canada;

