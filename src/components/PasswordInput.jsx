function PasswordInput() {   // Define the PasswordInput component as a function
  function handleChange() { 
    console.log("Entering password...");
  } // Defines a function that logs a message whenever the input changes

  return (
    <div>
      <input
        type="password"
        placeholder="Type here"
        onChange={handleChange}
      />
    </div>
  );
} // Creates the input field and attaches handleChange to its onChange event

export default PasswordInput; // Exports the component for use in App.jsx
