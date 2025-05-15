import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <h3>It is cool to deploy using custom docker actions!!</h3>
      </header>
      <MainContent />
    </>
  );
}

export default App;
