import React from 'react';

const NewContact = () => {
  return (
    <form className="container-fluid col-4 mt-5">
      <h2>Add new contact</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Photo</label>
        <input
          type="url"
          name="photo"
          id="photo"
          className="form-control"
        />
      </div>

      <div className="mt-3">
        <button type="submit" className="btn btn-success me-4">Save</button>
        <button className="btn btn-primary">Back to contacts</button>
      </div>
    </form>

  );
};

export default NewContact;