export default function Page() {
  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="title is-1">Let's do it!</h1>
        <div className="block">
          This text is within a <strong>second block</strong>. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
          fringilla egestas. Nullam condimentum luctus turpis.
        </div>
        <div className="block">
          This text is within a <strong>third block</strong>. This block has no
          margin at the bottom.
        </div>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
            </div>
          </div>
        </div>
        <div className="box">I'm in a box.</div>
        <button className="button">Button</button>
        <div className="block">
          This text is within a <strong>block</strong>.
        </div>
        <span className="tag"> Tag label </span>
      </div>
    </section>
  );
}
