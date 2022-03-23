import './App.scss';

function App() {
  return (
    <div className="trello-app">
      <nav className="navbar app">App Bar</nav>
      <nav className="navbar board">Board Bar</nav>
      <nav className="board-columns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://picsum.photos/id/902/200/200" alt="img-demo" />
              Title: Demo img
            </li>
            <li>Add what todo</li>
            <li>Add what todo</li>
            <li>Add what todo</li>
            <li>Add what todo</li>
          </ul>
          <footer> Add another card</footer>
        </div>
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://picsum.photos/id/902/200/200" alt="img-demo" />
              Title: Demo img
            </li>
            <li>Add what todo</li>
            <li>Add what todo</li>
            <li>Add what todo</li>
            <li>Add what todo</li>
          </ul>
          <footer> Add another card</footer>
        </div>
      </nav>
    </div>
  );
}

export default App;
