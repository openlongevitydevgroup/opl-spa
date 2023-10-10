import { useEffect, useState } from "react";
import extractAnnotationInformation from "../../../../../../utils/functions/extractAnnotationInformation";
import apiAnnotations from "../../../../../../api/apiAnnotations";
function SideNavMenuContent({ section }) {
  //Generic dropdown for a each annotation, the title will be a button drop down and will show the remainder of the sections
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  //Retrieve the all titles how.
  useEffect(() => {
    async function getMenuItems() {
      try {
        const response = apiAnnotations.getAnnotationEntries({
          annotation: section,
        });
        const menuItemTitles = response.data.map((item) =>
          extractAnnotationInformation(item)
        );
        setMenuItems(menuItemTitles);
      } catch (error) {
        setError(error.message);
      }
    }
    getMenuItems();
    console.log(menuItems);
  }, []);
  // How to deal with hierarchical data??

  return (
    <div>
      <ul>
        {/* {annotationArr.map((item) => (
          <li></li>
        ))} */}
      </ul>
    </div>
  );
}

export default SideNavMenuContent;
