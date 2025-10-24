    import React, { useState } from "react";
import axios from "axios";

const AddBikeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    available: false,
    remaining: "",
    specs: {
      mileage: "",
      displacement: "",
      engineType: "",
      cylinders: "",
      maxPower: "",
      maxTorque: "",
      frontBrake: "",
      rearBrake: "",
      fuelCapacity: "",
      bodyType: "",
    },
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.specs) {
      setFormData({
        ...formData,
        specs: { ...formData.specs, [name]: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("price", formData.price);
      form.append("available", formData.available);
      form.append("remaining", formData.remaining);
      form.append("specs", JSON.stringify(formData.specs));
      if (image) form.append("image", image);

      const res = await axios.post("http://localhost:5000/api/bikes", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(res.data.message);
      setFormData({
        name: "",
        price: "",
        available: false,
        remaining: "",
        specs: {
          mileage: "",
          displacement: "",
          engineType: "",
          cylinders: "",
          maxPower: "",
          maxTorque: "",
          frontBrake: "",
          rearBrake: "",
          fuelCapacity: "",
          bodyType: "",
        },
      });
      setImage(null);
    } catch (error) {
      setMessage("Error adding bike: " + error.response?.data?.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add New Bike</h2>
      {message && <p style={styles.message}>{message}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Available:</label>
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Remaining:</label>
          <input
            type="number"
            name="remaining"
            value={formData.remaining}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Upload Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>

        <h3 style={styles.subtitle}>Specifications</h3>
        {Object.keys(formData.specs).map((key) => (
          <div key={key} style={styles.row}>
            <label style={styles.label}>{key}:</label>
            <input
              type="text"
              name={key}
              value={formData.specs[key]}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        ))}

        <button type="submit" style={styles.button}>
          Add Bike
        </button>
      </form>
    </div>
  );
};

// Simple inline styles (you can move to CSS file)
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    background: "#1a1a1a",
    color: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
  title: { textAlign: "center", marginBottom: "20px" },
  subtitle: { marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  row: { display: "flex", flexDirection: "column" },
  label: { marginBottom: "5px", fontWeight: "500" },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #555",
    background: "#2a2a2a",
    color: "#fff",
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    background: "#e63946",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: { textAlign: "center", color: "#0f0" },
};

export default AddBikeForm;
