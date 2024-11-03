function Contact () {
  return (
    <div id="contact">
    <div className="mt-3 mx-[5%]">
      <h3 className="text-center font-bold text-3xl bg-red-200 rounded-lg">
        <span className="text-red-500">Contact </span> Us
      </h3>
      <div className="mt-2 gap-5 flex max-sm:flex-col items-center">
        <form className="max-sm:w-full max-sm:mb-2 flex flex-col w-1/2 border p-5 rounded-lg gap-3 justify-start items-start" type="submit">
          <input type="text" placeholder="Name" className="font-bold border w-full p-1 rounded-lg"/>
          <input type="email" placeholder="Email" className="font-bold border w-full p-1 rounded-lg"/>
          <input type="text" placeholder="Address" className="font-bold border w-full p-1 rounded-lg"/>
          <textarea placeholder="Message" className="font-bold border w-full p-1 rounded-lg"></textarea>
          <button className="bg-black text-white rounded-lg py-1 px-10 hover:opacity-80">
            Submit
          </button>
        </form>
        <div className="rounded-lg max-sm:w-full h-[280px] flex bg-cover bg-right justify-center items-center w-1/2 bg-[url(https://github.com/BennethA/flower-shop-website/blob/main/src/assets/contactImg.webp?raw=true)]">
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact;