// Import React, components, states, effects, and components
import React, { useState } from "react";

// Create a function to control the form submission make sure to use onAddToy from Main App
function ToyForm({ onAddToy }) {
  // Declare initial states for the name and image of the toy
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // Make sure to preventDefault and clear the field out when done, but use onAddToy to populate data about toy with initial states
  function handleSubmit(e) {
    e.preventDefault();
    onAddToy({ name, image, likes: 0 });
    setName("");
    setImage("");
  }

  return (
    <div className="container">
      {/* Place an onSubmit to call the handleSubmit function */}
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        {/* Setup input field to update states when onChange is triggered for name */}
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {/* Setup input field to update states when onChange is triggered for image */}
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={name}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        {/* Setup input field for button to create a toy */}
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

// Make globally available
export default ToyForm;
