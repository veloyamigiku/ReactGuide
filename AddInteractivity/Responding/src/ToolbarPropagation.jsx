export default function ToolbarPropagation() {
  return (
    <div className="Toolbar" onClick={() => alert('You clicked on the toolbar!')}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Uploading Image
      </button>
    </div>
  )
}