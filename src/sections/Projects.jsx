import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
/**
 * The Projects component renders a section with a heading and a
 * list of Project components. The component also handles a
 * mouse move event to update the x and y motion values, which
 * are used to create a "pulling" effect on the preview images.
 * The preview images are rendered as a list of motion.img
 * components, which are positioned absolutely and have a
 * fixed z-index of 50.
 *
 * @returns {JSX.Element} The Projects component.
 */
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  /**
   * Updates the x and y motion values based on the mouse position.
   * The values are offset by 20 to create a "pulling" effect.
   * @param {MouseEvent} e The mouse event.
   */
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      id="projects"
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* Render the Project components */}
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />  // Pass setPreview as a prop for hover effect
      ))}
      {/* Render the preview image if it exists */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;