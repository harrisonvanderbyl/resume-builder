import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { resume } from "./resume";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card } from "./card/Card";
import { InfoCard } from "./card/InfoCard";
function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [hoverObj, setHoverObj] = React.useState("");

  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        {/* <nav
          className="w3-sidebar w3-hide-medium w3-hide-small"
          style={{ width: "20%" }}
        >
          <div className="bgimg"></div>
        </nav> */}

        {/* <!-- Hidden Sidebar (reveals when clicked on menu icon)-->*/}
        <nav
          className="w3-sidebar w3-black w3-animate-right w3-xxlarge"
          style={{
            display: showSidebar ? "block" : "none",
            paddingTop: "150px",
            right: "0",
            zIndex: 2,
            width: showSidebar ? "60%" : "0",
          }}
          id="mySidebar"
        >
          <div
            className="w3-button w3-black w3-xxxlarge w3-display-topright"
            style={{ padding: "0 12px" }}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <i className="fa fa-remove"></i>
          </div>
          <div className="w3-bar-block w3-center">
            <a
              href="#home"
              className="w3-bar-item w3-button w3-text-grey w3-hover-black"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="w3-bar-item w3-button w3-text-grey w3-hover-black"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              Portfolio
            </a>
            <a
              href="#skills"
              className="w3-bar-item w3-button w3-text-grey w3-hover-blacks"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              Skills
            </a>
          </div>
        </nav>

        {/* <!-- Page Content -->*/}
        <div style={{}}>
          {/* <!-- Menu icon to open sidebar -->*/}
          <span
            className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black"
            style={{ width: "auto", right: 0 }}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <i className="fa fa-bars"></i>
          </span>
          <div
            className="w3-container flex-container"
            style={{
              padding: "20px 10%",
              // 2 columns
              flexWrap: "wrap",
            }}
          >
            {/* <!-- Header -->*/}
            <span
              className="w3-container w3-center"
              style={{ padding: "128px 16px", width: "100%" }}
              id="home"
            >
              <h1 className="w3-jumbo">
                <b>{resume.Name}</b>
              </h1>
              <p>{resume.Description}</p>

              <div className="w3-section ">
                <p>
                  <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right">
                    {" "}
                  </i>{" "}
                  Email:
                  <a href={"mailto:" + resume.Contact}> {resume.Contact}</a>
                </p>
              </div>
            </span>

            {/* <!-- About Section -->*/}
            <Card id="skills" title="Skills" direction="row">
              {/* <h3 className="w3-padding-16">My Skills</h3> */}

              {Object.entries(resume.Skills)
                .sort((a, b) => b[1].level - a[1].level)
                .map(([skill, { icon, level, image, desc }]) => (
                  // A circle loading bar
                  <span
                    style={{
                      display: "inline-block",
                      width: "100px",
                      margin: "10px",
                      position: "relative",
                      // tooltip
                    }}
                    id={skill + "-tooltip"}
                  >
                    <div
                      onMouseEnter={() => setHoverObj(skill)}
                      onMouseLeave={() => setHoverObj("")}
                    >
                      <CircularProgressbar
                        value={(100 * level) / 10}
                        text={``}
                      />

                      {icon ? (
                        <i
                          className={`fa fa-${icon}`}
                          style={{
                            position: "absolute",
                            left: "25%",
                            right: "25%",
                            top: "25%",
                            bottom: "25%",
                            fontSize: "50px",
                            color: "#000",
                          }}
                        ></i>
                      ) : image ? (
                        <img
                          src={image}
                          style={{
                            width: "50px",
                            position: "absolute",
                            left: "25%",
                            right: "25%",
                            top: "25%",
                            bottom: "25%",
                          }}
                          alt="pic"
                        />
                      ) : (
                        <div
                          style={{
                            position: "absolute",
                            left: "10%",
                            right: "25%",
                            top: "20%",
                            bottom: "25%",
                            textAlign: "center",
                            fontSize: "20px",
                          }}
                        >
                          <p className="w3-wide">{skill}</p>
                        </div>
                      )}
                    </div>
                    {hoverObj === skill && (
                      <div
                        style={{
                          position: "absolute",
                          ...// if the skill is in the right half of the screen, show the tooltip on the left
                          (window.innerWidth / 2 >
                          (document
                            .getElementById(skill + "-tooltip")
                            ?.getBoundingClientRect()?.x ?? 0) +
                            (document
                              .getElementById(skill + "-tooltip")
                              ?.getBoundingClientRect().width ?? 0) /
                              2
                            ? {
                                left: "110%",
                              }
                            : {
                                right: "110%",
                              }),
                          top: "50%",
                          transform: "translate(0, -50%)",
                          padding: "10px",
                          backgroundColor: "#eee",
                          borderRadius: "5px",
                          boxShadow: "0px 0px 5px #ccc",
                          zIndex: "100",
                          width: "300px",
                          border: "1px solid #ccc",
                          animation: "fadein 0.25s",
                        }}
                      >
                        <p
                          className="w3-wide"
                          style={{
                            color: "#000",
                            fontSize: "20px",
                            lineHeight: "1.5",
                            fontWeight: "bold",
                          }}
                        >
                          {skill}
                        </p>
                        <p
                          className="w3-wide"
                          style={{
                            color: "#000",
                            fontSize: "16px",
                            textAlign: "left",
                            // letter spacing: "1px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {desc ?? ""}
                        </p>
                        <div className="w3-light-grey">
                          <div
                            className="w3-container w3-center w3-padding-small w3-dark-grey"
                            style={{
                              width: ((100 * level) / 10).toFixed(0) + "%",
                            }}
                          >
                            {((100 * level) / 10).toFixed(0)}%
                          </div>
                        </div>
                      </div>
                    )}
                  </span>
                  // <div>
                  //   <p className="w3-wide">{skill}</p>
                  //   <div className="w3-light-grey">
                  //     <div
                  //       className="w3-container w3-center w3-padding-small w3-dark-grey"
                  //       style={{ width: ((100 * level) / 10).toFixed(0) + "%" }}
                  //     >
                  //       {((100 * level) / 10).toFixed(0)}%
                  //     </div>
                  //   </div>
                  // </div>
                ))}

              <br />

              {/* <!-- Testimonials -->*/}

              {/* <!-- End About Section -->*/}
            </Card>

            {/* <!-- Portfolio Section -->*/}
            <Card
              id="portfolio"
              title="Portfolio"
              className="halfed"
              columns={2}
            >
              {/* <!-- Grid for photos -->*/}
              {resume.Portfolio.projects.map((project) => (
                <span
                  className=""
                  onClick={
                    // link to project
                    () => window.open(project.url)
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <InfoCard>
                    <img
                      src={project.image}
                      style={{ width: "64px", margin: "0px" }}
                      alt="pic"
                    />

                    <h5>{project.name}</h5>
                    <p className="w3-opacity">{project.description}</p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      {project.skills.map((skill) => (
                        <span
                          style={{
                            backgroundColor: "#ddd",
                            padding: "5px",
                            margin: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </InfoCard>
                </span>
              ))}

              {/* <!-- End Portfolio Section -->*/}
            </Card>

            <Card className="halfed" id="Experience" title="Experience">
              {resume.Experience.map((exp) => (
                <InfoCard>
                  <h3 className="w3-padding-16">{exp.position}</h3>
                  <p className="w3-wide imp">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="w3-wide imp">
                    <i className="fa fa-building fa-fw w3-margin-right"></i>
                    {exp.company}
                  </p>
                  <p className="imp">
                    <i className="fa fa-question fa-fw w3-margin-right"></i>
                    {exp.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {exp.skills.map((skill) => (
                      <span
                        style={{
                          backgroundColor: "#ddd",
                          padding: "5px",
                          margin: "5px",
                          borderRadius: "5px",
                          color: "#000",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </InfoCard>
              ))}
            </Card>
          </div>

          {/* <!-- END PAGE CONTENT -->*/}
        </div>
      </body>
    </html>
  );
}

export default App;
