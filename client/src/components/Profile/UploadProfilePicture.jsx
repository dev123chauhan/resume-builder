import "../../css/uploadprofile.css"
import noPicture from "../../assets/noProfile.jpg"
const UploadProfilePicture = () => {
  return (
    <div className="uploadPicture">
      <h2>Upload Picture</h2>
      <div className="pictureContainer">
        <img src={noPicture} alt="Profile" className="profileImage" />
        <button className="uploadButton">Update Profile Picture</button>
      </div>
      <p className="helpText">Make sure the image is below 5MB</p>
      <button className="saveButton">Save Changes</button>
    </div>
  );
};

export default UploadProfilePicture;


