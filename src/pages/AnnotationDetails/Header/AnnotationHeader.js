import { useSelector } from "react-redux";
function AnnotationHeader() {
  const category = useSelector((state) => state.annotation.annotation);
  const annotation = useSelector((state) => state.annotation.details);

  return (
    <>
      <div className="title flex flex-row pt-8 underline">
        <h1 className="text-lg font-semibold capitalize md:text-2xl">
          {" "}
          {category} : {annotation.title}
        </h1>
      </div>
    </>
  );
}

export default AnnotationHeader;
