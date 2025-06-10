import React, { useState } from "react";
import { X, Calendar, DollarSign, Globe, CheckCircle } from "lucide-react";
import { toast } from "react-toastify";

const Form = ({ showBookingForm, setShowBookingForm }) => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const projectTypes = [
    { value: "business-website", label: "Business Website" },
    { value: "e-commerce", label: "E-commerce Store" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "portfolio", label: "Portfolio Website" },
    { value: "custom", label: "Custom Solution" },
  ];

  const budgetRanges = ["$500 - $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"];
  const timelineOptions = ["1-2 weeks", "2-4 weeks", "1-2 months", "2-3 months", "3+ months"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(false);

    try {
      const res = await fetch("/api/handleBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          timeline: "",
          budget: "",
          description: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showBookingForm && (

        <div className="modal-overlay">
          <div className="modal-backdrop" onClick={() => setShowBookingForm(false)} />
          <div className="modal-dot" />
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h2 className="text-2xl font-bold">Book Your Project</h2>
                <p className="text-white/80 mt-1">Let's bring your web vision to life</p>
              </div>
              <button onClick={() => setShowBookingForm(false)} className="close-btn">
                <X className="w-6 h-6" />
              </button>
            </div>

            {
              successMsg == true ?
                <div className="w-full h-full flex justify-center items-center px-4">
                  <div className="text-center p-8 max-w-md mx-auto rounded-xl shadow-md transition-all duration-300 animate-in fade-in zoom-in">
                    <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-6 animate-in fade-in slide-in-from-top-4 duration-700" />
                    <h3 className=" text-2xl font-semibold mb-3">Submission Received!</h3>
                    <p className=" mb-6">We've got your details and will contact you within 2 - 24 hours.</p>
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                      <button onClick={() => setShowBookingForm(false)} className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200">
                        Back to Home
                      </button>
                    </div>
                  </div>
                </div>
                :

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-grid">
                    <div>
                      <label>Full Name *</label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label>
                      <Globe className="icon" /> Project Type *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label>
                        <Calendar className="icon" /> Timeline *
                      </label>
                      <select
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label>
                        <DollarSign className="icon" /> Budget Range *
                      </label>
                      <select
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label>Project Description</label>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-input resize-none"
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={() => setShowBookingForm(false)}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? "Submitting..." : "Book Project"}
                    </button>
                  </div>
                </form>
            }
          </div>
        </div>

      )}
    </>
  );
};

export default Form;