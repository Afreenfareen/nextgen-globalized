// export default function Contact() {
//   return (
//     <div className="p-8">
//       <h1>Contact</h1>
//       <input className="border p-2 block my-2" placeholder="Name" />
//       <button className="bg-blue-500 text-white px-4 py-2">
//         Submit
//       </button>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields required");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/send", form);
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("Failed to send ❌");
    }

    setLoading(false);
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-3 rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border p-3 rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full border p-3 rounded" />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}