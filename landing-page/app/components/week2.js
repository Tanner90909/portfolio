import Image from 'next/image';

export default function Week2() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-3">
            <h1>Week 2</h1>
          </div>
          <div className="col-9">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image src="/path/to/your-image.jpg" className="img-fluid rounded-start" alt="Alt Text" width={300} height={200} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">Blog post week 2</p>
                    <p className="card-text"><small className="text-body-secondary">More Text</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}