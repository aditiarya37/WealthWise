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
          <p className="card-content-2">
          Here’s a helpful tip: In banking, ‘credited’ means more money for you, and ‘debited’ means less.

In accounting, it's slightly different but follows the same core idea — tracking what's coming in and going out. Understanding these terms will make banking and budgeting easier for you.

Now that you know the basics, stay tuned for more simple and practical finance tips!"
          </p>
        </div>
        <div className="card">
          <p>
          Understanding Bank Accounts: Savings vs. Current Accounts

"Did you know that not all bank accounts are the same? Banks offer different types of accounts tailored to meet specific needs. Let's explore the two most common types — savings accounts and current accounts — and how they serve different purposes.

A savings account is ideal for individuals who want a safe place to store their money while earning interest over time. Think of it as a personal piggy bank, but better because your money grows without doing anything!
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
