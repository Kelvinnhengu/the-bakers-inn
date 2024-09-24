import React from 'react'
import teamwork from '../../assets/images/teamwork.png'
import respect from '../../assets/images/respect.png'
import integrity from '../../assets/images/integrity.png'
import commitment from '../../assets/images/commitment.png'
import excellence from '../../assets/images/excellence.png'

const OurValues = () => {
  return (
    <div className="our-values">
      <h2>Our Core Values</h2>
      <div className="container">
        <div className="first-cards">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <img src={teamwork} alt="" />
                <h3>Teamwork</h3>
                <p>
                  We set inspiring goals that we persue with passion, unity and
                  focus. We support each other, build on our strengths and
                  ensure that every player in our team contributes fully. We
                  play to win and realise that synergy communication snd
                  alignment bind us together.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img src={respect} alt="" />
                <h3>Respect</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis excepturi voluptatem libero, voluptates iste iusto
                  odio cum magnam incidunt at. Nam explicabo tempora ratione,
                  delectus nesciunt sint. Consequuntur, illum optio.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img src={integrity} alt="" />
                <h3>Integrity</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis maiores ullam exercitationem reiciendis facere
                  nemo iusto neque laborum recusandae?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="second-cards">
          <div className="row">
            <div className="col-12 col-md-6">
              {" "}
              <div className="card two">
                <img src={commitment} alt="" />
                <h3>Commitment</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Amet, repellendus reiciendis earum fuga beatae aspernatur,
                  repellat eius deleniti necessitatibus atque ullam, quaerat
                  quam nisi?
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card">
                <img src={excellence} alt="" />
                <h3>Excellence</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur tempore impedit similique doloremque earum error
                  unde recusandae omnis, nihil reprehenderit, aliquam
                  necessitatibus, quis veritatis ex voluptates sapiente maxime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues
