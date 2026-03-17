export default function Home() {
  return (
    <>
      <header>
        <div><a href="#join">Join</a></div>
        <div>
          <a href="#services">Insights</a>
          <a href="#pricing">Pricing</a>
          <a href="#inquiry">Feedback</a>
        </div>
      </header>

      <section className="section hero">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>

        <div className="hero-content">
          <h1>FIONAMIAO CONSULTING</h1>
          <p>
            Independent strategy and operations consulting, supporting organizations
            with decision-making, execution, and organizational clarity.
          </p>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="services-content">
          <div>
            <h2>Insights</h2>
            <p>
              We work closely with founders and leadership teams to address complex
              strategic and operational challenges.
            </p>
            <ul>
              <li>Business strategy and planning</li>
              <li>Operations and process optimization</li>
              <li>Market and competitive analysis</li>
              <li>Execution and decision support</li>
            </ul>
          </div>
          <div>
            <p>
              Our advisory approach emphasizes clarity, independence, and practical execution.
            </p>
          </div>
        </div>
      </section>

      <section className="section work">
        <h2>How We Work</h2>
        <p>
          Engagements are independent, confidential, and tailored to each client’s specific context.
        </p>
        <ul>
          <li>Clearly scoped advisory engagements</li>
          <li>Direct collaboration with decision-makers</li>
          <li>Actionable, structured outputs</li>
          <li>Strict confidentiality</li>
        </ul>
      </section>

      <section className="section pricing-section" id="pricing">
        <h2>Pricing</h2>
        <div className="pricing">
          <div className="plan"><strong>Basic</strong><br />$15 / month<br />General advisory access.</div>
          <div className="plan"><strong>Standard</strong><br />$25 / month<br />Structured ongoing support.</div>
          <div className="plan"><strong>Premium</strong><br />$30 / month<br />Priority advisory engagement.</div>
        </div>
      </section>

      <section className="inquiry" id="inquiry">
        <div>
          <h2>Submit an inquiry</h2>
          <p>We will get back to you within 24–48 hours.</p>
          <p>email: <strong>contact@fionamiao.com</strong></p>
        </div>
        <form>
          <input placeholder="Subject" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <button type="button">Submit</button>
        </form>
      </section>

      <section className="section" id="join">
        <div className="join-box">
          <h2>Join</h2>
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Company" />
          <input type="password" placeholder="Password" />
          <button>Create account</button>
        </div>
      </section>

      <footer>
        © 2026 <strong>FIONAMIAO CONSULTING</strong><br />
        email: contact@fionamiao.com
      </footer>
    </>
  );
}
