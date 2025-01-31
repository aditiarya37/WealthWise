import NavBar from "../NavBar";
import "./Roadmap.css";

const roadmapData = [
  {
    title: "Definition and Cryptocurrency as a Digital Asset",
    status: "unlocked",
  },
  {
    title: "Difference from Traditional Assets like Stocks, Bonds, and Commodities",
    status: "locked",
  },
];

const Roadmap = () => {
  return (
    <>
        <NavBar />
        <div className="roadmap-container">
        <h1 className="roadmap-title">Introduction to Cryptocurrency</h1>
        <div className="roadmap-cards">
          {roadmapData.map((item, index) => (
            <div key={index} className={`roadmap-card ${item.status}`}>
              <div className="roadmap-icon">
                {item.status === "unlocked" ? "▶️" : "🔒"}
              </div>
              <p className="roadmap-text">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Roadmap