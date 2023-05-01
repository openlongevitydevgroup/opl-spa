import {TreeView, TreeItem} from '@mui/lab';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import {useSpring, animated} from '@react-spring/web'
import Collapse from '@mui/material/Collapse'
import { PropTypes } from 'prop-types';
import QuestionDetail from './QuestionDetail';

function TransitionComponent(props){
    const style = useSpring({
        from: {opacity: 0, 
        transform: 'translated3d(20px,0,0)'}, 
        to: {
            opacity: props.in ? 1: 0, 
            transform: `translated3d(${props.in ? 0 : 20}px,0,0)`
        }
    });
    return <animated.div style={style}>
        <Collapse {...props}/>

    </animated.div>;

}


TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
  };
function QuestionListTree(props){

    return(
        <TreeView defaultEndIcon={<IndeterminateCheckBoxOutlinedIcon/>} defaultExpandIcon={<AddBoxOutlinedIcon/>} defaultCollapseIcon={<IndeterminateCheckBoxOutlinedIcon></IndeterminateCheckBoxOutlinedIcon>}>

            {props.questions.map(question => {
                return(
                    <TreeItem key={question.question_id}sx={{borderLeft: '1px dashed', paddingTop:'5px'}} TransitionComponent={TransitionComponent} nodeId={question.question_id.toString()} label={question.title}>
                        <QuestionDetail onSubmitHandler={props.onSubmitHandler} onModalOpen = {props.onModalOpen} question={question}/>
                        {question.children ? question.children.map(child => <TreeItem label={child.title} key={child.question_id} nodeId={child.question_id.toString()} sx={{borderLeft:'1px dashed', paddingTop:'5px'}}> 
                        <QuestionDetail onSubmitHandler={props.onSubmitHandler} question={question} onModalOpen={props.onModalOpen}/>

                        </TreeItem>) : null}
                    </TreeItem> 
                )
            })}



        </TreeView>

    )
}

function QuestionListTable(props){
    return;
}

export default QuestionListTree;
