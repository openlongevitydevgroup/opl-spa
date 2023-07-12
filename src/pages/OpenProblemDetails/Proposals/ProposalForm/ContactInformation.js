import { useDispatch } from "react-redux";
import { detailsActions } from "../../../../state/Details/detailsSlice";
function ContactInformation() {
  const dispatch = useDispatch(); 
  const onChangeHandler = (e,id) => {
    const value = e.target.value; 
    dispatch(detailsActions.setFormValue({id, value}))
  }
  return (
    <div className="contacts w-7/12 pt-2">
      <h1 className="py-2 text-lg text-theme-blue font-semibold">User Information (optional):</h1>
      <p className="py-1 px-6 text-sm md:text-base"> This will be visible on your post.</p>
      <div className="fname-lname flex flex-row justify-between px-6 py-2">
        <input
          className="border border-theme-blue p-1 w-6/12 text-sm mr-2"
          type="text"
          placeholder="First name"
          id="firstName"
          onChange={(e) => onChangeHandler(e,"firstName")}
        ></input>
        <input
          className="border border-theme-blue  p-1 w-6/12 text-sm ml-2"
          type="text"
          placeholder="Last name"
          id="lastName"
          onChange={(e) => onChangeHandler(e, "lastName")}
        ></input>
      </div>
      <div className="affiliation px-6 py-2">
        <input
          className="mr-4 w-full border border-theme-blue p-1 text-sm"
          type="text"
          placeholder="Affiliation"
          id="affiliation"
          onChange={(e)=> onChangeHandler(e,"affiliation")}
        ></input>
      </div>
    </div>
  );
}

export default ContactInformation;
