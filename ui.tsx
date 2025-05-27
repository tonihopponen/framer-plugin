import "./ui.css"

export function App() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <p>Welcome to your first Framer plugin!</p>
      <button 
        onClick={() => {
          // Close the plugin
          parent.postMessage({ pluginMessage: { type: "close" } }, "*")
        }}
        className="close-button"
      >
        Close
      </button>
    </div>
  )
}
