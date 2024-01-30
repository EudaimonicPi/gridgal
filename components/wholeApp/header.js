// TO DO: export for decomp?
const headerStyles = {
  backgroundColor: "#add8e6",
  padding: "0.25%",
  height: "100%", //does this do anything? 
  width: "100%",
  display: "flex",
  alignItems: "center", // Center items vertically
  flexDirection: "column",

  textAlign: "center", // Center align the text
  color: "white",
  fontFamily: "Andale Mono", // Choose a professional font
};

export default function Header(props) {
    const title = props.title
    const msg = props.msg
    return (
      <>
        <div style={headerStyles}>
          <h1>
            <b>{title}</b>
          </h1>
          <p style={{ fontSize: "20px" }}> {msg} </p>
        </div>
      </>
    );
  }