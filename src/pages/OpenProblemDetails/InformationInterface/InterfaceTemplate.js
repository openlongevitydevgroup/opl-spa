import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Button } from '@mui/material';

function InterfaceTemplate(props){
    const title = props.title; 
    return (
        <div className="classification w-full mt-8 border border-gray-100 shadow-lg bg-gray-100 px-8 py-4 ">
            <div className="header flex flex-row justify-between">
                <h1 className="text-lg md:text-2xl text-theme-blue">{title}</h1>
                <Button><IndeterminateCheckBoxIcon/></Button>
            </div>
            <div>
            {props.children}

            </div>
        </div>
    )
};

export default InterfaceTemplate; 