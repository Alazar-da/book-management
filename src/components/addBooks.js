function addBooks() {
    return (
      <section className="bg-white h-screen text-black pt-5 container mx-auto">
        <div className="lg:w-4/5 py-5 pt-5 grid grid-cols-7">
            <form className=" flex flex-col gap-3 border p-4 border-slate-600 rounded-lg col-span-4 col-start-3 bg-slate-500">
                <div className="grid justify-center">
                    <label className="">Title</label>
                    <input type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs bg-white" />
                </div>
                <div className="grid justify-center">
                    <label className="">Author</label>
                    <input type="text" placeholder="Author" className="input input-bordered input-primary w-full max-w-xs bg-white" />
                </div>
                <div className="grid justify-center">
                    <label className="">Edition</label>
                    <input type="text" placeholder="Edition" className="input input-bordered input-primary w-full max-w-xs bg-white" />
                </div>
                <div className="grid justify-center">
                    <label className="">Price</label>
                    <input type="number" placeholder="Price In Birr" min={0} className="input input-bordered input-primary w-full max-w-xs bg-white" />
                </div>
                <div className="grid justify-center">
                    <label className="">Status</label>
                    <input type="text" placeholder="status" className="input input-bordered input-primary w-full max-w-xs bg-white" />
                </div>
                <div className="grid justify-center">
                    <label className="">Overview</label>
                    <textarea placeholder="Overview..." className="input input-bordered input-primary w-full max-w-xs bg-white">
                    </textarea>
                </div>
                <div className="grid justify-center">
                    <label className="">Type</label>
                    <select className="select select-primary w-full max-w-xs bg-white">
                        <option disabled selected>Service Type</option>
                        <option value={"Buy"}>Buy</option>
                        <option value={"Rent"}>Rent</option>
                    </select>
                </div>
                <div className="grid justify-center">
                    <label className="">Genere</label>
                    <select className="select select-primary w-full max-w-xs bg-white">
                        <option disabled selected>Genere</option>
                        <option value={"Fiction"}>Fiction</option>
                        <option value={"Religious"}>Religious</option>
                        <option value={"Business"}>Business</option>
                        <option value={"Selfhelp"}>Self help</option>
                        <option value={"Philosophy"}>Philosophy</option>
                        <option value={"other"}>other</option>
                    </select>
                </div>

            </form>
        </div>
      </section>
    );
  }

  export default addBooks;
