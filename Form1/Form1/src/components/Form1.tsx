import "./Form1.css";

function Form1() {
  return (
    <div className="formContainer">
      <div className="reqInfo">
        <div className="reqInfoTop">
          <div className="card">
            <h6>Location Name</h6>
            <h5>Hindalco Renukoot</h5>
          </div>
          <div className="card">
            <h6>Contact Person</h6>
            <h5>John Smith</h5>
          </div>
          <div className="card">
            <h6>Date of Request</h6>
            <h5>2025-11-10</h5>
          </div>
        </div>

        <div className="draftCardContainer">
          <div className="draft-card">
            <h6>Draft</h6>
            <h5>DRAFT-1762767586077</h5>
          </div>
        </div>
      </div>

      <div className="changeDetails">
        <h3 className="sectionTitle">1. Change Details</h3>

        <div className="formGroup">
          <label>Affected Part/Project No.</label>
          <input type="text" />
        </div>

        <div className="formGroup">
          <label>Change Description</label>
          <textarea rows={3}></textarea>
        </div>
      </div>

      <div className="impactAssesment"></div>

      <div className="moc-level"></div>

      <div className="submit-section">
        
      </div>
    </div>
  );
}

export default Form1;
