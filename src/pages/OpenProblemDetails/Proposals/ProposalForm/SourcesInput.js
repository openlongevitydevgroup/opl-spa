function SourcesInput(){
    return(
        <div className="sources-input">
            <div className="sources-input title">
                <h1 className="text-lg text-theme-blue font-semibold">Add sources:</h1>
            </div>
            <div className="form w-8/12 py-4 pb-6">
                <form action="" className="flex flex-row">
                    <select name="TEST" id="" placeholder="TEST" className="border border-theme-blue mr-4 px-4">
                        <option value="Link">Link</option>
                        <option value="Reference">Reference</option>
                    </select>
                    <input type="text" className="border border-theme-blue w-full"></input>
                </form>

            </div>

        </div>
    )
}

export default SourcesInput; 