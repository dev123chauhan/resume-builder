import '../../css/userprofile.css';
const UserProfile = () => {
  return (
    <div className="userProfile">
      <h2>User Profile</h2>
      <section className="section">
        <h3>Personal Information</h3>
        <div className="infoGrid">
          <div className="infoItem">
            <span>Name</span>
            <span>Johndoe</span>
          </div>
          <div className="infoItem">
            <span>Email</span>
            <span>Rahulsingshree@simerse.in</span>
          </div>
          <div className="infoItem">
            <span>Mobile Number</span>
            <span>+91 1234567895</span>
          </div>
          <div className="infoItem">
            <span>Gender</span>
            <span>Male</span>
          </div>
          <div className="infoItem">
            <span>Date of Birth</span>
            <span>15 August 2001</span>
          </div>
        </div>
      </section>
      {/* Add more sections for Address Details, Company Details, and User Preference Select */}
    </div>
  );
};

export default UserProfile;