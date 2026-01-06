import { useState } from "react";
import FormInput from "./shared/FormInput";
import Button from "./shared/Button";
import SuccessMessage from "./shared/SuccessMessage";
import DishCard from "./shared/DishCard";

function Reservation({ selectedFood, onBack, isVisible }) {
  if (!isVisible) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reservationDate: "",
    reservationTime: "",
    numberOfGuests: "1",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.reservationDate) newErrors.reservationDate = "Required";
    if (!formData.reservationTime) newErrors.reservationTime = "Required";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Reservation:", { food: selectedFood.name, ...formData });
    setIsLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        reservationDate: "",
        reservationTime: "",
        numberOfGuests: "1",
      });
      setErrors({});
      onBack();
    }, 2500);
  };

  if (submitted) {
    return (
      <SuccessMessage
        title="Reservation Confirmed!"
        message={`Your reservation for ${selectedFood.name} is confirmed`}
        email={formData.email}
        onAction={onBack}
      />
    );
  }

  return (
    <section className="w-full min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-2xl px-4 mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 text-slate-600 hover:text-slate-900"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          Reserve Your Meal
        </h1>
        <p className="mb-8 text-slate-600">
          Fill in your details to complete the reservation
        </p>

        <DishCard
          image={selectedFood.image}
          name={selectedFood.name}
          description={selectedFood.description}
          rating={selectedFood.rating}
          price={selectedFood.price}
        />

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 bg-white rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
              placeholder="John Doe"
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              placeholder="+63 912 345 6789"
              required
            />
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Guests <span className="text-red-500">*</span>
              </label>
              <select
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label="Date"
              name="reservationDate"
              type="date"
              value={formData.reservationDate}
              onChange={handleInputChange}
              error={errors.reservationDate}
              required
            />
            <FormInput
              label="Time"
              name="reservationTime"
              type="time"
              value={formData.reservationTime}
              onChange={handleInputChange}
              error={errors.reservationTime}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={onBack} variant="secondary" disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? "Processing..." : "Confirm"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
