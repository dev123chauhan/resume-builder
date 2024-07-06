import "../../css/updateprofile.css";

const UpdateProfile = () => {
  return (
    <div className="updateProfile">
      <h2>Update Profile</h2>
      <form className="form">
        <div className="formGroup">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" placeholder="Enter Name" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">E-mail ID*</label>
          <input type="email" id="email" placeholder="Enter Email ID" />
        </div>
        {/* Add more form fields */}
        <button type="submit" className="saveButton">Save</button>
      </form>
    </div>
  );
};

export default UpdateProfile;




