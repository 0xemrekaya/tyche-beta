import { useState } from "react";
import PropTypes from "prop-types";

function AddressSettingsPopup({ address, onSave, onClose }) {
  const [alias, setAlias] = useState(address.alias || "");
  const [network, setNetwork] = useState(address.network || "");

  const handleSave = () => {
    onSave({ ...address, alias, network });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container bg-tycheBeige p-6 rounded shadow-lg">
        <h2 className="text-tycheBlue font-bold mb-4">Address Settings</h2>
        <div className="settings-form">
          <label className="block text-tycheGray mb-2">Alias</label>
          <input
            type="text"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="mb-4 p-2 bg-white border border-tycheGray rounded w-full"
          />

          <label className="block text-tycheGray mb-2">Network</label>
          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            className="p-2 bg-white border border-tycheGray rounded w-full"
          >
            <option value="Ethereum">Ethereum</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="BNB Smart Chain">BNB Smart Chain</option>
            <option value="Avalanche">Avalanche</option>
            {/* Diğer ağları ekleyebilirsiniz */}
          </select>
        </div>
        <button
          className="mt-4 bg-tycheBlue text-white p-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="mt-4 bg-tycheRed text-white p-2 rounded ml-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

AddressSettingsPopup.propTypes = {
  address: PropTypes.shape({
    alias: PropTypes.string,
    network: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddressSettingsPopup;
