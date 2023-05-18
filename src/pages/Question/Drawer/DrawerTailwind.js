import {useSelector, useDispatch} from 'react-redux'
import { questionActions } from '../../../state/Question/questionSlice'
function DrawerTailwind(){
    const drawerState = useSelector(state => state.question.filterOpen)
    const dispatch = useDispatch()
    const drawerOpenHandler = () => {
        dispatch(questionActions.toggleFilterDraw())
    }
    return(

        <div className="sidebar h-full bg-white shadow w-1/5 py-2" onClick={drawerOpenHandler}>
            <button>Species</button>
            {drawerState && <ul> <li>TEST</li> </ul>}


        </div>
    )
}

export default DrawerTailwind