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
    //Replace with dispatches from redux
    const {onSubmitHandler, onModalOpen, onModalClose} = props.handlers

    return(
        <TreeView defaultEndIcon={<IndeterminateCheckBoxOutlinedIcon/>} defaultExpandIcon={<AddBoxOutlinedIcon/>} defaultCollapseIcon={<IndeterminateCheckBoxOutlinedIcon></IndeterminateCheckBoxOutlinedIcon>}>

            {props.questions.map(question => {
                return(
                    <TreeItem key={question.question_id} id={question.question_id.toString()} sx={{borderLeft: '1px dashed', paddingTop:'5px'}} TransitionComponent={TransitionComponent} nodeId={question.question_id.toString()} label={question.title}>
                        <QuestionDetail onSubmitHandler={onSubmitHandler} onModalOpen = {onModalOpen} question={question}/>
                        {question.children ? question.children.map(child => <TreeItem label={child.title} key={child.question_id} id={child.question_id.toString()} nodeId={child.question_id.toString()} sx={{borderLeft:'1px dashed', paddingTop:'5px'}}> 
                        <QuestionDetail onSubmitHandler={onSubmitHandler} question={question} onModalOpen={onModalOpen}/>

                        </TreeItem>) : null}
                    </TreeItem> 
                )
            })}



        </TreeView>

    )
}


//Table view showing a list of questions to be rendered in the tree view function below
function QuestionListTable(props){
    const allQuestions = props.questions
    return(
        <table>
            <tr>
                <th>Title</th>
                <th>Parent Question</th>
                <th>Species</th>
                <th>Organ</th>
            </tr>
            {allQuestions.map((question) => {
                return(
                    <tr>
                        <td>{question.title}</td>
                    </tr>
                )
            })}
        </table>
    )
}


function QuestionView(props){
    //Replace with redux store state 
    const viewState = props.state; 
    const {recursiveData: recursiveQuestions, data:questions } = useLoaderData()

    // Replace this with dispatch 
    const handlers = { 
        onModalOpen : props.onModalOpen, 
        onModalClose : props.onModalClose,
        onSubmitHandler : props.onSubmitHandler,
    }

    

    if(viewState === 'tree'){
        return (
            <Fragment>
            <QuestionListTree handlers ={handlers} questions={recursiveQuestions}/>
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <QuestionListTable questions={questions}/>
            </Fragment>
        )
    }

}

export default QuestionView
