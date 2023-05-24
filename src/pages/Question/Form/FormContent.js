import TextArea from "./Inputs/TextArea";
import TextInput from "./Inputs/TextInput";
import Select from "./Inputs/Select";
import { useLoaderData } from "react-router-dom";

function FormContent(){
    const {data:questions} = useLoaderData();
    return(
        <div className="inputs w-full">
        <Select questions={questions} id="parent-question" />
        <TextInput
          id="title"
          label="required"
          labelText="Title:"
          required="required"
        />
        <TextArea
          id="description"
          label="Please add a description to your question for clarity. Required."
          labelText="Description:"
          name="description"
          rows={4}
          required="required"
        />
        <TextInput
          id="species"
          label=""
          labelText="Species (optional):"
          required={null}
        />
        <TextArea
          id="references"
          label=""
          labelText="References (optional):"
          required={null}
          rows={6}
        />
      </div>
    )
}

export default FormContent;