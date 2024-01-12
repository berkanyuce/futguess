import React, { useState } from 'react';

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...";

  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        {/* Sayfa içeriği buraya gelecek */}
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-11/12">
        <h3
          className="cursor-pointer underline"
          onClick={() => setModalIsOpen(true)}
        >
          Nasıl Çalışır?
        </h3>

        {modalIsOpen && (
          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
            <div className="relative p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
              <h2 className="text-2xl text-black font-bold mb-4">Nasıl Çalışır?</h2>
              <p className='text-black'>{loremIpsum}</p>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-md mt-4"
                onClick={() => setModalIsOpen(false)}
              >
                Kapat
              </button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
