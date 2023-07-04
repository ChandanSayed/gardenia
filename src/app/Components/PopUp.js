'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import dental from '/public/images/dental-implant.png';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';

const PopUp = ({ setShowPop, showPop }) => {
  const [data, setData] = useState(false);

  const accordionList = [
    { id: 1, question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', answer: 'Nam vel ornare mi, ut aliquam nisl. Quisque in enim sed nunc ultricies placerat. In vel arcu id metus ultrices luctus. Quisque tristique fermentum nisl sollicitudin laoreet. Morbi quis mi et nunc scelerisque consequat at vitae eros. Phasellus molestie euismod justo, nec interdum quam ornare posuere.' },
    { id: 2, question: 'Donec maximus est ac turpis porttitor bibendum.', answer: 'Nam vel ornare mi, ut aliquam nisl. Quisque in enim sed nunc ultricies placerat. In vel arcu id metus ultrices luctus. Quisque tristique fermentum nisl sollicitudin laoreet. Morbi quis mi et nunc scelerisque consequat at vitae eros. Phasellus molestie euismod justo, nec interdum quam ornare posuere.' },
    { id: 3, question: 'Donec maximus est ac turpis porttitor bibendum.', answer: 'Nam vel ornare mi, ut aliquam nisl. Quisque in enim sed nunc ultricies placerat. In vel arcu id metus ultrices luctus. Quisque tristique fermentum nisl sollicitudin laoreet. Morbi quis mi et nunc scelerisque consequat at vitae eros. Phasellus molestie euismod justo, nec interdum quam ornare posuere.' },
    { id: 4, question: 'Donec maximus est ac turpis porttitor bibendum.', answer: 'Nam vel ornare mi, ut aliquam nisl. Quisque in enim sed nunc ultricies placerat. In vel arcu id metus ultrices luctus. Quisque tristique fermentum nisl sollicitudin laoreet. Morbi quis mi et nunc scelerisque consequat at vitae eros. Phasellus molestie euismod justo, nec interdum quam ornare posuere.' },
    { id: 5, question: 'Donec maximus est ac turpis porttitor bibendum.', answer: 'Nam vel ornare mi, ut aliquam nisl. Quisque in enim sed nunc ultricies placerat. In vel arcu id metus ultrices luctus. Quisque tristique fermentum nisl sollicitudin laoreet. Morbi quis mi et nunc scelerisque consequat at vitae eros. Phasellus molestie euismod justo, nec interdum quam ornare posuere.' },
  ];

  function toggleClick(index) {
    if (index === data) {
      return setData(false);
    }
    setData(index);
  }

  return (
    <>
      <div className={`overlay bg-[#000000] bg-opacity-50 fixed h-screen left-0 right-0 bottom-0 top-0 z-50 px-4 ${showPop ? 'block' : 'hidden'}`}>
        <div className="container max-w-[98%] sm:max-w-[80%] rounded-md lg:max-w-[1000px] fixed left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] overflow-hidden  text-center">
          <AiOutlineClose className="absolute top-5 right-8 text-lg md:text-xl cursor-pointer" onClick={() => setShowPop(false)} />
          <div className="top px-2 md:px-3 py-6 bg-[#E7EBFF] rounded-t-md">
            <Image src={dental} alt="Icon" className="mx-auto bg-white p-2 rounded" />
            <h2 className="text-2xl lg:text-6xl font-semibold mb-4 mt-3 text-center">Dental Implants</h2>
            <p className="text-base md:text-sm">
              Phasellus vitae porttitor dolor. Duis augue nibh, vehicula a turpis hendrerit, <br /> lobortis volutpat metus. Duis vel neque urna. Duis in varius nulla.
            </p>
          </div>
          <div className="accordion p-3 md:p-6 bg-white pb-8 rounded-b-md">
            {accordionList.map((item, index) => (
              <div className="acc-item" key={item.id}>
                <div className="title flex justify-between items-center cursor-pointer" onClick={() => toggleClick(index)}>
                  <h3 className="font-semibold text-[11px] md:text-xl">{item.question}</h3> {data === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                <div className="des py-3 md:py-4">
                  <p className={`text-left text-[10px] md:text-lg ${data === index ? 'block' : 'hidden'}`}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
