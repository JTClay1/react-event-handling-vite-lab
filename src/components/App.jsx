import PasswordInput from "./PasswordInput.jsx"; // Import PasswordInput component from file
import SubmitButton from "./SubmitButton.jsx";   // Import SubmitButton component from file

function App() {   // Define the App component as a function
  return (
    <div>
      <PasswordInput />   {/* Render the password input field */}
      <SubmitButton />    {/* Render the submit button */}
    </div>
  );
} // Returns a container that displays both components together

export default App; // Exports App as the root component for the project
