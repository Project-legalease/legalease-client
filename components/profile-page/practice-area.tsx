import React from "react";

function PracticeArea() {
  return (
    <div className="flex flex-row">
      <h3 className="text-xl font-bold text-primary-blue48">Practice Areas</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-bold text-primary-blue48 mb-2">Criminal Law</h4>
          <p className="text-primary-dark1E">
            My team can provide robust defence strategies to ensure your rights are protected and your freedom is secured.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-bold text-primary-blue48 mb-2">Family Business</h4>
          <p className="text-primary-dark1E">
            With a deep understanding of family-owned businesses, my company can provide legal solutions that safeguard your business legacy for
            future generations.
          </p>
        </div>
        <div className="bg-gray-100 text-primary-blue48 p-4 rounded">
          <h4 className="font-bold mb-2">Estate Planning</h4>
          <p className="text-primary-dark1E">
            Our comprehensive estate planning services ensure your assets are protected and your wishes are honored, giving you peace of mind for the
            future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PracticeArea;
