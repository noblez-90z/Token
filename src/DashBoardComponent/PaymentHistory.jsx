import React from "react";

const PaymentHistory = () => {
  const payments = [
    {
      date: "2024-09-10",
      transactionId: "TRX123",
      amount: "$100",
      status: "Completed",
    },
    {
      date: "2024-09-08",
      transactionId: "TRX456",
      amount: "$50",
      status: "Pending",
    },
    {
      date: "2024-09-05",
      transactionId: "TRX789",
      amount: "$150",
      status: "Completed",
    },
  ];

  return (
    <section>
      <h3 className="text-xl font-bold mb-4">Payment History</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Transaction ID</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{payment.date}</td>
                <td className="py-2 px-4">{payment.transactionId}</td>
                <td className="py-2 px-4">{payment.amount}</td>
                <td className="py-2 px-4">{payment.status}</td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentHistory;
