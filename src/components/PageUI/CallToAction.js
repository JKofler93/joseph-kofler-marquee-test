
function CallToAction({ctaMessage}) {
  return (
    <div>
      <h2>{ctaMessage}</h2>
      <button onClick={() => console.log("Hello from the LEts talk button")}>LET'S TALK</button>
    </div>
  )
}

export default CallToAction
