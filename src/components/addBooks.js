function addBooks() {
    return (
      <section className="bg-white h-screen text-black pt-5">
        <div className="container mx-auto lg:w-4/5 py-5 pt-5 flex justify-center border border-slate-600 rounded-lg">
            <form className=" flex flex-col gap-6">
                <div className="flex flex-col">
                    <label className="">Title</label>
                    <input type="text" placeholder="Title" />
                </div>
                <div className="flex flex-col">
                    <label className="">Title</label>
                    <input type="text" placeholder="Title" />
                </div>
                <div className="flex flex-col">
                    <label className="">Title</label>
                    <input type="text" placeholder="Title" />
                </div>
            </form>
        </div>
      </section>
    );
  }

  export default addBooks;
