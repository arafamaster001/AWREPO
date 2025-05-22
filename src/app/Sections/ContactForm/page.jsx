import Form from "./Form";

function ContactForm() {
  return (
    <div className="min-h-screen bg-black text-white py-[20%] px-[5%] lg:p-[5%] flex flex-col items-center justify-center relative">
      

      <div className="w-full  relative z-10">
        <div className="mb-16 max-w-xl">
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="w-12 h-1 bg-white"></div>
              <div className="text-xs text-gray-400 ml-4 uppercase tracking-widest">Contact Us</div>
            </div>
          </div>
          <h2 className="sub_heading text-white mb-6">Get in touch with our team</h2>
          <p className="text-gray-400 text-xl">
            Have questions or want to discuss a project? We're here to help you bring your ideas to life.
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
}

export default ContactForm;
