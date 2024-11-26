import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects, onProjectClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    customPaging: (i) => (
      <div className="custom-dot">
        <span className="dot-indicator" />
      </div>
    ),
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="project-slider">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectCarousel;
