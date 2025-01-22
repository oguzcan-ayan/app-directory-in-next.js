export default function AboutLayout({ children, ...rest }) {

    console.log("Resting Props:", rest);

    return (
      <div>
        <h1>I am coming from About Layout</h1>
        <div>{children}</div>
      </div>
    );
  }