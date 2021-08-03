import React from 'react';

function BannerCategory(props) {
  const title = props.title !== undefined ? props.title : 'Landing';
  const descr =
    props.children !== undefined ? (
      props.children
    ) : (
      <p>
        Lorem ipsum dolor sit amet nullam consequat
        <br />
        sed veroeros. tempus adipiscing nulla.
      </p>
    );

  return (
    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>{title}</h1>
        </header>
        <div className="content">{descr}</div>
      </div>
    </section>
  );
}

export default BannerCategory;
