// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";

// export default function GetStartedModal({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     budget: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.trim()))
//       newErrors.phone = "Valid phone number required";
//     if (!formData.service.trim()) newErrors.service = "Select a service";
//     if (!formData.message.trim()) newErrors.message = "Message is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form Submitted", formData);
//       setSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         budget: "",
//         message: "",
//       });
//     }
//   };

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-30" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-90"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-90"
//             >
//               <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-xl font-bold text-gray-900 mb-4"
//                 >
//                   🚀 Start Your Project
//                 </Dialog.Title>

//                 {submitted && (
//                   <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
//                     ✅ Thank you! We’ll get in touch shortly.
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block font-medium">Full Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full p-2 border rounded ${
//                         errors.name ? "border-red-500" : "border-gray-300"
//                       }`}
//                     />
//                     {errors.name && (
//                       <p className="text-red-500 text-sm">{errors.name}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block font-medium">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full p-2 border rounded ${
//                         errors.email ? "border-red-500" : "border-gray-300"
//                       }`}
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm">{errors.email}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block font-medium">Phone</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full p-2 border rounded ${
//                         errors.phone ? "border-red-500" : "border-gray-300"
//                       }`}
//                     />
//                     {errors.phone && (
//                       <p className="text-red-500 text-sm">{errors.phone}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block font-medium">Service Needed</label>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className={`w-full p-2 border rounded ${
//                         errors.service ? "border-red-500" : "border-gray-300"
//                       }`}
//                     >
//                       <option value="">-- Select a service --</option>
//                       <option>Website Design</option>
//                       <option>SEO</option>
//                       <option>Google & Meta Ads</option>
//                       <option>eCommerce</option>
//                       <option>Other</option>
//                     </select>
//                     {errors.service && (
//                       <p className="text-red-500 text-sm">{errors.service}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block font-medium">
//                       Budget (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded"
//                     />
//                   </div>

//                   <div>
//                     <label className="block font-medium">Project Details</label>
//                     <textarea
//                       name="message"
//                       rows="4"
//                       value={formData.message}
//                       onChange={handleChange}
//                       className={`w-full p-2 border rounded ${
//                         errors.message ? "border-red-500" : "border-gray-300"
//                       }`}
//                       placeholder="Tell us about your project..."
//                     ></textarea>
//                     {errors.message && (
//                       <p className="text-red-500 text-sm">{errors.message}</p>
//                     )}
//                   </div>

//                   <div className="flex justify-between items-center mt-6">
//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//                     >
//                       Submit
//                     </button>
//                     <button
//                       type="button"
//                       className="text-gray-500 hover:underline"
//                       onClick={onClose}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// }

import React, { useState } from "react";

export default function GetStartedModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null; // Don't render if not open

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.trim()))
      newErrors.phone = "Valid phone number required";
    if (!formData.service.trim()) newErrors.service = "Select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 mx-4 relative">
        <h3 className="text-xl font-bold mb-4 text-gray-900">
          🚀 Start Your Project
        </h3>

        {submitted && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
            ✅ Thank you! We’ll get in touch shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Service Needed</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.service ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">-- Select a service --</option>
              <option>Website Design</option>
              <option>SEO</option>
              <option>Google & Meta Ads</option>
              <option>eCommerce</option>
              <option>Other</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Budget (Optional)</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Project Details</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-gray-500 hover:underline"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
