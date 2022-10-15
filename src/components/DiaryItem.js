import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function DiaryItem({ item, showModal, deleteItem}) {
  return (
    <div className="diary-row">
      <span onClick={() => showModal(item)} >
        <span className="mr-3">{item.id}</span>
          {item.title}
        </span>
      <div>
        <span className="date">
          {item.date}
          <AiOutlineCloseCircle onClick={() => deleteItem(item.id)} className="inline align-text-bottom delete ml-1 text-red-600" />
        </span>
      </div>
    </div>
  );
}
