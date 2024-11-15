import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "../data";
import img1 from "../images/Timeline_img-1.jpeg";
import img2 from "../images/Timeline_img-2.png";
import img3 from "../images/Timeline_img-3.jpeg";

function Timeline() {
  const timelineIcons = [img1, img2, img3];

  return (
    <section className="w-full flex flex-col items-center justify-center my-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40" id="experience">
      <p className="text-sm sm:text-base font-semibold text-gray-300 uppercase mb-2" style={{ letterSpacing: "0.2em", fontFamily: "Avenir Next" }}>Timeline</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My journey so far</h2>
      <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10 md:whitespace-nowrap">
        All my academic and professional experience with some milestones achieved are summed up here:
      </p>
      <VerticalTimeline>
        {Experience && Experience.map((n, index) => (
          <VerticalTimelineElement
            key={n.id}
            contentStyle={{
              background: "#f5f7fa",
              color: "#333",
              borderRadius: "8px",
              boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f5f7fa" }}
            date={<span className="text-xs sm:text-sm text-gray-400 font-semibold">{n.date}</span>}
            icon={<img src={timelineIcons[index % timelineIcons.length]} alt="icon" className="w-full h-full rounded-full" />}
            iconStyle={{
              background: "#e5e5e5",
              color: "#333",
              border: "2px solid #ccc",
            }}
          >
            <h3 className="vertical-timeline-element-title text-lg sm:text-xl font-semibold text-blue-500">{n.title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-md sm:text-lg font-medium text-gray-600 mb-2">{n.location}</h4>
            <p className="text-gray-600 text-sm sm:text-base">{n.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
