import React from "react";
import { Link } from "react-router-dom";
import "./Content1.css";

const Content1 = () => {
  return (
    <div className="content-container">
      <h2 className="quiz-title">Resources</h2>
      <div className="content-cards">
        <div className="card">
          <p>
          What are Debit and Credit?
          "Debit and credit are two fundamental terms used in both banking and accounting. They help record and track financial transactions.

          Let’s break it down simply. Think of debit as money flowing out of your account, while credit is money flowing in.

          For example, when you swipe your debit card to buy groceries, that's a debit — because money is being deducted from your bank account. On the other hand, when your salary gets credited to your account, that’s a credit — money is being added.
          </p>
        </div>
        <div className="card">
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
