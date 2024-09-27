import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const GeneratedTokens = () => {
  const tokens = [
    { id: 1, name: "Token 1", value: "1234ABCD", expires: "2024-12-31" },
    { id: 2, name: "Token 2", value: "5678EFGH", expires: "2025-06-15" },
  ];

  return (
    <section className="mb-8">
      <h3 className="text-xl font-bold mb-4">Generated Tokens</h3>
      {tokens.length === 0 ? (
        <div className="p-4 bg-white rounded-lg shadow text-center">
          <p>No tokens generated yet.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Generate New Token
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tokens.map((token) => (
            <div key={token.id} className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-semibold">{token.name}</h4>
              <p>Value: {token.value}</p>
              <p>Expires: {token.expires}</p>
              <button className="bg-gray-200 text-sm px-2 py-1 rounded mt-2">
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GeneratedTokens;
