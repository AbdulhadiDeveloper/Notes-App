// src/components/SharePopup.jsx
import React from "react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

const SharePopup = ({ url, onClose }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md w-[320px]">
        <h3 className="mb-3 font-semibold text-lg">Share</h3>

        {/* Social buttons */}
        <div className="flex gap-4 mb-4">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={32} className="text-green-500 hover:scale-110" />
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} className="text-blue-600 hover:scale-110" />
          </a>

          {/* Twitter/X */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={32} className="text-sky-500 hover:scale-110" />
          </a>

          {/* Email */}
          <a
            href={`mailto:?subject=Check this out&body=${encodeURIComponent(url)}`}
          >
            <FaEnvelope size={32} className="text-gray-600 hover:scale-110" />
          </a>
        </div>

        {/* Copy link box */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={url}
            readOnly
            className="border p-2 flex-1 rounded text-sm"
          />
          <button
            onClick={copyLink}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
          >
            Copy
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SharePopup;
