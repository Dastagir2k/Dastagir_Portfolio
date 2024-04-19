// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// const Contact = () => {
// const [name,setName]=useState("");
// const[email,setEmail]=useState("");
// const [message,setMessage]=useState("")
// const handleSubmit=()=>{
  
// }

//   return (
//     <section
     
//       id="contact"
//       className="w-full h-screen bg-gradient-to-b  from-gray-800 to-black  p-4 text-white"
//     >
//       <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-purple-400 text-purple-400">
//             Contact
//           </p>
//           <p className="py-6">Submit the form to get touch with me .</p>
//         </div>
//         <div className="flex justify-center items-center">
//           <form
//             action="https://getform.io/f/mepEkQaM"
//             method="POST"
//             className="flex flex-col w-full md:w-1/2"
//           >
//             <input
//             required
//             onChange={(e)=>setName(e.target.value)}
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <input
//             required

//               type="text"
//               name="email"
//             onChange={(e)=>setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <textarea
//             required
//             onChange={(e)=>setMessage(e.target.value)}
//               name="message"
//               placeholder="Enter your message"
//               rows={10}
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             ></textarea>
//             <button
//               className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  my-8 mx-auto flex items-center
//             rounded-md hover:sacle-110 duration-300"
//             >
//               Lets Talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = {
      name: name,
      email: email,
      message: message
    };

    try {
      // Send form data to backend or third-party service
      const response = await fetch("https://getform.io/f/mepEkQaM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Handle response as needed
      console.log("Form submitted !", response);

      // Optionally, reset form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-400 text-purple-400">
            Contact
          </p>
          <p className="py-6">Submit the form to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              required
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              required
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
            rounded-md hover:sacle-110 duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
