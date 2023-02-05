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
    return ( 
        <div className='map-container'>
            <Alberta className= "province Alberta" />
            <Saskatchewan className="province Saskatchewan" />
            <BritishC className="province Bc" />
            <Manitoba className="province Manitoba" />
            <NB className="province Nb" />
            <Newfoundland className="province Newfoundland" />
            <Northwest className="province Northwest" />
            <NovaS className="province Ns" />
            <Nunavut className="province Nunavut" />
            <Ontario className="province Ontario" />
            <Quebec className="province Quebec" />
            <Yukon className="province Yukon" />
        </div>
     );
}

export default Canada;

