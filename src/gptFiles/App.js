function App() {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history"></ul>
        <nav>
          <p>FatihamChat</p>
        </nav>
      </section>
      <section className="main">
        <h1>FatihamChat</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">&rarr;</div>
          </div>
          <p>FatihamChat gives you informations you want</p>
        </div>
      </section>
    </div>
  );
}

export default App;
