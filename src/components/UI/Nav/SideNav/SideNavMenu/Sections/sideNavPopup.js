import { Form } from "react-router-dom";

function sideNavMenuPopup({ items }) {
  return (
    <Form>
      {items.map((item) => (
        <div>
          <label>{item.title}</label>
          <input type="checkbox" />
        </div>
      ))}
    </Form>
  );
}

export default sideNavMenuPopup;
