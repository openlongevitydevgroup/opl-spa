import SolutionsComponent from "./SolutionsComponent";
function Solutions() {
  return (
    <>
      <h1 className="py-2 pb-4 text-lg text-theme-blue md:text-xl font-semibold">
        Submitted Solutions
      </h1>
      <div className="submitted-list border-y py-2 border-theme-blue">
        <SolutionsComponent/>
      </div>
    </>
  );
}
export default Solutions;
