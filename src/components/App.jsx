// Import necessary states, effects, components
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

/*
Create a function for the main app component
Render the individual toys onto the page using the existing ToyCard component.
Edit ToyCard to show each toy’s details.
Push the feature branch and open a PR on GitHub.
*/
function App() {
  // Declare initial states for the form and toys
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Fetch all of the toys on component inital mount
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.error("Error fetching toys: ", error));
  }, []);

  // Create a function to handle the display form on click
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Add a new toy to the backend and update the state to display as a POST
  function handleAddToy(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToy)
    })
      .then(response => response.json())
      .then(data => setToys([...toys, data]))
      .catch(error => console.error("Error adding toy: ", error));
  }

  // Update or Patch the toy's likes to the backend and update the state as a PATCH
  function handleLike(toy) {
    fetch("http://localhost:3001/toys/${toy.id}", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 })
    })
      .then(response => response.json())
      .then(updatedToy => setToys(toys.map(t => t.id === updatedToy.id ? updatedToy : t)))
      .catch(error => console.error("Error liking toy: ", error));
  }

  // Delete a toy from the backend and update the state and then take it by filterign as a DELETE
  function handleDelete(id) {
    fetch("http://localhost:3001/toys/${id}", {
      method: "DELETE",
    })
      .then(() => setToys(toys.filter(toy => toy.id !== id)))
      .catch(error => console.error("Error deleting toy: ", error));
  }
  return (
    <>
      <Header />
      {/* show form only on true */}
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {/* Pass the toys and handler functions as props */}
      <ToyContainer toys={toys} onLike={handleLike} onDelete={handleDelete} />
    </>
  );
}

// Make globally available
export default App;
