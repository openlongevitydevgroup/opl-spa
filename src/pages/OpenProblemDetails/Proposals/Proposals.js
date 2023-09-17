function Proposals(props) {
  return (
    <div className="py-4">
      <section className="submissions">
        <div className="w-full bg-white px-8 py-4 shadow-lg ">
          {props.children}
        </div>
      </section>
    </div>
  );
}

export default Proposals;
