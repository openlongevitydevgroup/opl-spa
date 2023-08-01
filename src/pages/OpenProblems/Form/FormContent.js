import TextArea from "./Inputs/TextArea";
import TextInput from "./Inputs/TextInput";
import Select from "./Inputs/Select";
import ContactForm from "./ContactInformationForm";
import { useLoaderData } from "react-router-dom";



function FormContent() {
  const { data: questions } = useLoaderData();

  return (
    <div className="question-inputs w-full">
      <Select questions={questions} id="parent-question" />
      <TextInput
        id="title"
        label="required"
        labelText="Title:"
        required="required"
      />
      <TextArea
        id="description"
        label="Please add a description to your problem for clarity"
        labelText="Description (optional):"
        name="description"
        rows={4}
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
      <div className="contact-information w-full pt-4 text-center">
        <hr/>
      <ContactForm/>
      </div>
    </div>
  );
}

export default FormContent;
