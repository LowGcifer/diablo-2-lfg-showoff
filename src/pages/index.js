import "./style.css";
import "./fonts.css";

function Home() {
  return (
    <div>
      <h1 className="header">Welcome to the Diablo 2 LFG Gallery!</h1>
      <p className="paragraph">
        This is a gallery of screenshots from a website that never finished
        development. The website was an LFG (Looking For Group) tool for the
        video game Diablo 2. The developer of Diablo 2 eventually implemented an
        improved in-game group system, thus making this website redundant,
        however I am very proud of the design work I did and believed it still
        warrants showing off.
      </p>
      <div className="image-section">
        <img
          src={require("../images/desktop-1.png")}
          alt="Opening view of desktop app"
          className="image-content"
        ></img>
        <img
          src={require("../images/desktop-2.png")}
          alt="Scrolled view of desktop app"
          className="image-content"
        ></img>
        <img
          src={require("../images/desktop-create.png")}
          alt="View of create screen on desktop"
          className="image-content"
        ></img>
        <img
          src={require("../images/desktop-search.png")}
          alt="View of Search screen on desktop"
          className="image-content"
        ></img>
        <img
          src={require("../images/desktop-join.png")}
          alt="View of results page on desktop"
          className="image-content"
        ></img>
        <img
          src={require("../images/desktop-lobby.png")}
          alt="View of lobby on desktop"
          className="image-content"
        ></img>
        <img
          src={require("../images/mobile-1.png")}
          alt="Opening view on mobile."
          className="image-content"
        ></img>
        <img
          src={require("../images/mobile-create.png")}
          alt="View of create menu on mobile."
          className="image-content"
        ></img>
        <img
          src={require("../images/mobile-search.png")}
          alt="View of results page on mobile."
          className="image-content"
        ></img>
        <img
          src={require("../images/mobile-join.png")}
          alt="View of search page on mobile"
          className="image-content"
        ></img>
      </div>
    </div>
  );
}

export default Home;
