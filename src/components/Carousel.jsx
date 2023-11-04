


const Carousel1 = ({ children, header }) => {
  

  return (
    <>
      <div className="carousel-header-container">
        {header && <h2>{header}</h2>}

        <div className="carousel-buttons">
          <button onClick={""}>{"<"}</button>
          <button onClick={""}>{">"}</button>
        </div>
      </div>

      <div className="carousel">
        <ul >{children}</ul>
      </div>
    </>
  );
};

export default Carousel1;
