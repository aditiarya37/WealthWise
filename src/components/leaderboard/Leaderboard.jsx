import Navbar from '../NavBar';
import "./Leaderboard.css";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: "1", name: "Pratyush Sudarshan", tokens: 3580, color: "gold" },
    { rank: "2", name: "Mansi Awasthy", tokens: 1888, color: "silver" },
    { rank: "3", name: "Aman Raj", tokens: 1270, color: "bronze" },
    { rank: "4", name: "Shubham Kumar", tokens: 950, color: "gray" },
    { rank: "5", name: "Bhaskar Sisodiya", tokens: 836, color: "gray" },
    { rank: "6", name: "Mayank Jain", tokens: 777, color: "gray" },
    { rank: "7", name: "Vishwas Joshi", tokens: 712, color: "gray" },
  ];

  const generateStreakDots = (days) => {
    return Array(days).fill().map((_, i) => (
      <span key={i} className={`dot ${i % 5 !== 0 ? "checked" : "empty"}`}>
        {i % 5 !== 0 ? "✔️" : ""}
      </span>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="leaderboard-container">
        <div className="leaderboard-card">
          <h2 className="title">Weekly Leaderboard</h2>
          <p className="week">Current Week: 22-28 Dec</p>

          <div className="league-section">
            <p className="subtitle">Your League</p>
            <p className="league">
              <span className="league-tier">Iron</span>—Bronze—
              <span className="league-tier highlight">Silver</span>—
              <span className="league-tier gold">Gold</span>—Obsidian—Master—
              Grand Master
            </p>
          </div>

          <div className="leaderboard-list">
            <p className="leaderboard-list-title">Leaderboard</p>
            <p className="leaderboard-list-text">Watch lessons, attempt quizzes, earn Tokens and stay on the top.</p>
            <p className="leaderboard-list-para">Max. participants: 30</p>
            <div className="leaderboard-entry-header">
              <span>Rank</span>
              <span>Name</span>
              <span>Tokens</span>
            </div>
            {leaderboardData.map((player, index) => (
              <div key={index} className="leaderboard-entry">
                <span className={`rank rank-${player.color}`}>{player.rank}.</span>
                <span className={`name ${player.color}`}>{player.name}</span>
                <span className="tokens">{player.tokens}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="streak-card">
          <h3 className="title">Streak</h3>
          <p>Current Streak: <strong>18</strong></p>
          <p>Best Streak: <strong>7</strong></p>

          <div className="streak-section">
            <div className="streak-month">
              <h4>November:</h4>
              <div className="streak-grid">
                {generateStreakDots(30)}
              </div>
            </div>

            <div className="streak-month">
              <h4>December:</h4>
              <div className="streak-grid">
                {generateStreakDots(30)}
              </div>
            </div>
          </div>

          <div className="streak-nav">
            <button>{"<"} Previous</button>
            <button>Next {">"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
