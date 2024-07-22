import React from 'react';

const ModalForm = () => {


  // const displayStyle = (display: isOpen ? "block" : "none");

  return (
    <>
      <div className="modal-backdrop fade show" style={{display: "none"}}></div>
      <div className="modal" style={{display : "none"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close"></button>
            </div>
            <div className="modal-body d-flex justify-content-around">
              <div style={{width:'40%' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&s" alt="photo"/>

            </div>
            <div>
              <h4 className="mb-4">John Shepard</h4>
              <p className="mt-5">+996 555 555 555</p>
              <p>john@gmail.com</p>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" >Delete</button>
              <button type="button" className="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;