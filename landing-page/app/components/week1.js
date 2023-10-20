import Image from 'next/image';

export default function Week1() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Image src="/path/to/your-image.jpg" className="img-fluid rounded-start" alt="Alt Text" width={300} height={200} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">Blog post week 1</p>
                    <p className="card-text"><small className="text-body-secondary">More Text</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h1>Week 1</h1>
          </div>
        </div>
      </div>
    </>
  );
}