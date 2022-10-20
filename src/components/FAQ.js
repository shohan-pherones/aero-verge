import React from "react";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      headline: "Does Aero Verge support global warranty?",
      body: "You may use the free repair services at any officially authorized Aero Verge service center globally. The governing rules and the service terms and conditions are subject to the country or region in which you apply for Aero Verge.",
    },
    {
      id: 2,
      headline:
        "After I place an order, how do I change my order before shipment?",
      body: "The nation, product quantity, category, and color cannot be changed once an order has been placed. If you need to change these details, please cancel the order and purchase again. Due to different states and cities having different tax rates, we do not allow our customers to change the city, state, or ZIP code after the order has been placed when the order is paid for via credit card or bank transfer. If the order is paid for via Paypal or Affirm, no changes can be made since the payment service provider verifies shipping address information before they approve payment.",
    },
    {
      id: 3,
      headline:
        "Are there shipping charges for repeated delivery, rejected packages, or returned packages without reason?",
      body: "Yes. The consignee will be responsible for extra delivery charges if delivery failures are caused by the consignee. Shipment charges for returned products because of order cancellation or package rejection after the goods have been shipped will be at the consignee’s own expense and will be deducted from the refund. Shipment charges for returns without reason will be at the customer’s expense, and will be deducted from the refund.",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-center text-4xl font-medium mb-10">FAQ</h2>
      <div className=" flex flex-col gap-5">
        {faqs.map((faq) => (
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            key={faq.id}
          >
            <div className="collapse-title text-lg font-medium">
              {faq.headline}
            </div>
            <div className="collapse-content">
              <p>{faq.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
