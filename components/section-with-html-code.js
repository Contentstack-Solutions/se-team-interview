import parse from "html-react-parser";

export default function SectionWithHtmlCode(props) {
  const { embedCode } = props;
  if (embedCode.html_code_alignment === "Left") {
    return (
      <div className="contact-page-section max-width">
        <div className="contact-page-content">
          {embedCode.title && <h1>{embedCode.title}</h1>}
          {embedCode.description && parse(embedCode.description)}
        </div>
        <div className="contact-page-form">
          {embedCode.html_code
            && parse(embedCode.html_code)}
        </div>
      </div>
    );
  }
  return (
    <div className="contact-maps-section max-width">
      <div className="maps-details">
        {parse(embedCode.html_code)}
      </div>
      <div className="contact-maps-content">
        {embedCode.title ? (
          <h2>{embedCode.title}</h2>
        ) : (
          ""
        )}
        {embedCode.description && parse(embedCode.description)}
      </div>
    </div>
  );
}
