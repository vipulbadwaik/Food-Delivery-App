const Contact = () =>{
    return(
       <div className=" h-screen w-screen  flex justify-center items-center overflow-y-hidden">
        <div className="h-2/3 w-2/3 rounded-xl shadow-sm border-2 border-red-600  shadow-red-600 flex  flex-col items-center">
           <span className="mt-3">
               <h1 className="font-semibold text-5xl ">Contact Us</h1>
           </span>
           <span className=" mt-24 w-full h-full">
              <form className="flex justify-evenly ">
               
                <span className="flex flex-col space-y-10">
                <h3 className="font-medium text-xl">Name</h3>
                <h3 className="font-medium text-xl">Email</h3>
                <h3 className="font-medium text-xl">Comments</h3>
                </span>
                <span className="flex flex-col space-y-10">
                <input className="p-1 rounded-md border focus:shadow-lg focus:transition-all ease-in delay-150" type="text" placeholder="Name"></input>
                <input  className="p-1 rounded-md border focus:shadow-lg focus:transition-all ease-in delay-150" type="text" placeholder="Email"></input>
                
                <textarea className="p-1 rounded-md border focus:shadow-lg focus:transition-all ease-in delay-150" placeholder="Comments">

                </textarea>
                </span>
              </form>
           </span>
           <button className="mb-4 bg-red-700 p-2 rounded-md text-center text-white font-medium hover:shadow-md hover:shadow-red-900 hover:animate-bounce">
            Send 📩
           </button>
        </div>
       </div>
    )
}

export default Contact;