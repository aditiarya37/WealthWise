import React from "react";
import { Link } from "react-router-dom";
import "./Content1.css";
import ResourcesImage from "../../assets/resources-image.png";

const Content1 = () => {
  return (
    <div className="content-container">
      <h2 className="quiz-title">Resources</h2>
      <div className="content-cards">
        <div className="card card1">
          <img className="content-image" src={ResourcesImage} alt="Content" />
        </div>
        <div className="card card2">
          <p>
          Here’s a helpful tip: In banking, ‘credited’ means more money for you, and ‘debited’ means less. A credit transaction adds funds to your account, like receiving your salary or a refund, while a debit transaction deducts money, such as when you pay a bill or make a purchase.

In accounting, the concept is similar but focuses on tracking financial movements. A debit typically increases assets or expenses, while a credit increases liabilities or income. Understanding these basics can help you manage your finances better and make informed money decisions.
          </p>
        </div>
      </div>

      <Link to="/quiz1" className="next-button">
        Next →
      </Link>
    </div>
  );
};

export default Content1;
