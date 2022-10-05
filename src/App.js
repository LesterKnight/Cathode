import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div id="title-div">
        <img id="logo" src="logo.svg" alt="logo" />
        <div id="title-text">
          <h2 id="title">Cathode</h2>
          <h3>services Delivery Video Hosting</h3>
        </div>
      </div>
      <div id="menu">
        <ul>
          <li>
            <img src="new.png" class="menu_img" alt=""></img> Upload content
          </li>
          <li>
            <img src="archive.png" class="menu_img" alt=""></img> My videos
          </li>
          <li>
            <img src="find.png" class="menu_img" alt=""></img> Search
          </li>
        </ul>
      </div>
      <div id="play">
        <h1> Video Title</h1>
        <video width="640" height="480" controls></video>
        Uploaded by: user
        <br />
        Date: 01/01/2000
        <h2>Incorporate this video</h2>
        <textarea></textarea>
      </div>
    </div>
  );
}
