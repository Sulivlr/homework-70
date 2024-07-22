import React from 'react';

const Contacts = () => {
  return (
    <div className="container-fluid">
      <div className="card-body col-3">
        <div className="card d-flex flex-row mt-4">
          <img
            src="https://cdn.vectorstock.com/i/500p/57/62/message-box-questions-for-any-purposes-mark-vector-39825762.jpg"
            alt="img"
            style={{width: '100px'}}
          />
          <p className="mt-3">John Shepard</p>
        </div>
        <div className="card d-flex flex-row mt-4">
          <img
            src="https://cdn.vectorstock.com/i/500p/57/62/message-box-questions-for-any-purposes-mark-vector-39825762.jpg"
            alt="img"
            style={{width: '100px'}}
          />
          <p className="mt-3">John Wazowski</p>
        </div>
        <div className="card d-flex flex-row mt-4">
          <img
            src="https://cdn.vectorstock.com/i/500p/57/62/message-box-questions-for-any-purposes-mark-vector-39825762.jpg"
            alt="img"
            style={{width: '100px'}}
          />
          <p className="mt-3">John Praise</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
