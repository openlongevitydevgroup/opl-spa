import {TreeView, TreeItem} from '@mui/lab';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import {useSpring, animated} from '@react-spring/web'
import Collapse from '@mui/material/Collapse'
import { PropTypes } from 'prop-types';
import QuestionDetail from './QuestionDetail';
import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Transitions for the hierarchical list component
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

//Hierarchical list to be rendered in the tree view function below   
function QuestionListTree(props){
    const questions = props.questions
    return(
        <TreeView defaultEndIcon={<IndeterminateCheckBoxOutlinedIcon/>} defaultExpandIcon={<AddBoxOutlinedIcon/>} defaultCollapseIcon={<IndeterminateCheckBoxOutlinedIcon></IndeterminateCheckBoxOutlinedIcon>}>
            {questions.map(question => {
                return(
                    <TreeItem key={question.question_id} id={question.question_id.toString()} sx={{borderLeft: '1px dashed', paddingTop:'5px'}} TransitionComponent={TransitionComponent} nodeId={question.question_id.toString()} label={question.title}>
                        <QuestionDetail  question={question}/>
                        {question.children ? question.children.map(child => <TreeItem label={child.title} key={child.question_id} id={child.question_id.toString()} nodeId={child.question_id.toString()} sx={{borderLeft:'1px dashed', paddingTop:'5px'}}> 
                        <QuestionDetail question={question} />
                        </TreeItem>) : null}
                    </TreeItem> 
                )
            })}



        </TreeView>

    )
}


///////Table view showing a list of questions to be rendered in the tree view function below//////
//List component 

function ListComponent(props){
    return(
        <div className='shadow shadow-slate-500 bg-white mb-2'>
            <li className='py-2 pl-2'>
            <button>
                {props.children}
            </button>
            </li>
        </div>

    )
}

function QuestionList(props){
    const allQuestions = props.questions
    const filteredQuestions = useSelector(state => state.question.filteredResults)
    
    if(filteredQuestions && filteredQuestions.length > 0){
        return(
            <ul>
                {filteredQuestions.map(question => (
                 <ListComponent>{question.title}</ListComponent>
                ))}
            </ul>
        )}
    if(!filteredQuestions){
        return(
            <ul>
            {allQuestions.map(question => (
                <ListComponent>
                    {question.title}
                </ListComponent>
            ))}
        </ul>
        )
    }
}


function QuestionView(props){
    //Replace with redux store state 
    const viewState = props.state; 
    const {recursiveData: recursiveQuestions, data:questions } = useLoaderData()
    if(viewState === 'tree'){
        return (
            <Fragment>
            <QuestionListTree questions={recursiveQuestions}/>
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <QuestionList questions={questions}/>
            </Fragment>
        )
    }

}

export default QuestionView
