function Services() {
  return (
    <div className="container mt-5">
      
      <h1 className="display-3 text-center mb-4">Services</h1>
      <p className="lead text-center mb-4">
        Explore the services available to students at the University of Bacsilog.
      </p>

      
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Enrollment Assistance</h5>
              <p className="card-text">Help with registering for classes and managing your schedule.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Academic Advising</h5>
              <p className="card-text">Guidance from academic advisors to plan your curriculum effectively.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Scholarship Programs</h5>
              <p className="card-text">Information and support for scholarships, grants, and financial aid.</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-4">
        <h4>Other Services</h4>
        <ul>
          <li>Student Records</li>
          <li>Announcements and Updates</li>
          <li>IT Support</li>
        </ul>
      </div>
    </div>
  )
}

export default Services