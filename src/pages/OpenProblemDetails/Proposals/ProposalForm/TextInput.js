function TextInput() {
  return (
    <div>
      <form action="" className="flex flex-col">
        <input type="text" placeholder="Title" className="border mb-2 p-2"></input>
        <textarea className="border p-2" placeholder="Please exlain"></textarea>
        <div className="submit-button flex justify-center py-2 pt-4">
        </div>
      </form>
    </div>
  );
}

export default TextInput;
