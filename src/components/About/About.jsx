import React from "react";
import LineThrougStar from "../Line_Throug_star/Line_Throug_star";

export default function About() {
  return (
    <div1>
      <section className="  py-5 text-center bg-main text-white">
        <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
          <div className="content w-50 pt-5 ">
            <h1 className="text-uppercase">about component</h1>
            <LineThrougStar />
            
          </div>
          <div className="row row-cols-md-2 text-start px-5 pb-5 mb-5">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download 
            includes the complete source files including HTML, CSS, 
            and JavaScript as well as optional
             SASS stylesheets for easy customization.
            </p>
            <p>
            Freelancer is a free bootstrap theme created by Route.
             The download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          
        </div>
      </section>
    </div1>
  );
}
