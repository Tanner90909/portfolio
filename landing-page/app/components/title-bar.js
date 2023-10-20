import Image from "next/image"

export default function Title(){
    return(
    <>
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <h1>Tanner McDaniel</h1>
                    <h3>Portfolio</h3>
                </div>
                <div className="col-3">
                    <Image src="/app/img/temp-headshot.jpg" alt="Headshot" height="70" width="70" priority />
                </div>
            </div>
        </div>
    </>
    )
}
