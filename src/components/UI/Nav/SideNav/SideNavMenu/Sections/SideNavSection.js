import { useEffect, useState } from "react";
import extractAnnotationInformation from "../../../../../../utils/functions/extractAnnotationInformation";
import apiAnnotations from "../../../../../../api/apiAnnotations";

function isHierarchical() {
  //Whether the array from the API Call is hierarchical
}

function SideNavMenuContent({ section }) {
  const category = section;
  //Generic dropdown for a each annotation, the title will be a button drop down and will show the remainder of the sections
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  //Retrieve the all titles how.
  useEffect(() => {
    async function getMenuItems() {
      try {
        const response = await apiAnnotations.getAnnotationEntries({
          annotation: section,
        });
        const menuItemTitles = response.data.map((annotation) =>
          extractAnnotationInformation(annotation, category)
        );
        console.log(menuItemTitles);
        setMenuItems(menuItemTitles);
      } catch (error) {
        setError(error.message);
      }
    }
    getMenuItems();
  }, []);
  // How to deal with hierarchical data??
  if (error) {
    return (
      <div>
        <p> Unable to load section</p>
      </div>
    );
  }
  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default SideNavMenuContent;
