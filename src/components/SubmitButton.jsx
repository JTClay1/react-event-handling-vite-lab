function SubmitButton() {   // Define the SubmitButton component as a function
  function handleEnter() {
    console.log("Mouse Entering");
  } // Function that logs a message when the mouse moves onto the button

  function handleLeave() {
    console.log("Mouse Exiting");
  } // Function that logs a message when the mouse moves off the button

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
} // Creates the button element and attaches mouse enter/leave events to it

export default SubmitButton; // Exports the component for use in App.jsx
