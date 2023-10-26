function Chip(props){
    return(
        <div className="chip border border-theme-blue w-fit rounded-3xl px-2 bg-theme-blue text-white">
            {props.children}
        </div>
    )
}; 

export default Chip; 