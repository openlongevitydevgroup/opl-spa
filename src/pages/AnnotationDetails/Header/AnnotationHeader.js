import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function AnnotationHeader() {
    const category = useSelector((state) => state.annotation.annotation)
    const annotation = useSelector((state) => state.annotation)

// Use useState to manage the state of id, title, and description
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
    useEffect(()=>{
        if(category === "theory"){
            setId(annotation.theory.id)
            setTitle(annotation.theory.title)
            setDescription(annotation.theory.description); 
        }else if(category){ //May need to change into a switch statement once there are more tags
            setId(annotation[category][`${category}Id`])
            setTitle(annotation[category][`${category}Name`])
            setDescription(null);
        }   
    }, [category, annotation])


  return (
    <>
      <div className="title flex flex-row pt-8 underline">
        <h1
          className="text-lg font-semibold capitalize md:text-2xl"
        >{category} : {title && title}</h1>
      </div>
      {description && <div>
        <p>{description}</p>
        </div>}
    </>
  );
}

export default AnnotationHeader;
