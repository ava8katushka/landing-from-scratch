export default function Page() {
  return (
    <div>
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
      <div className="box">I'm in a box.</div>
      <button className="button">Button</button>
      <div className="block">
        This text is within a <strong>block</strong>.
      </div>
      <span className="tag"> Tag label </span>
    </div>
  );
}
