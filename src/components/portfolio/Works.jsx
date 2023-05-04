import { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.stack.some((stackItem) => stackItem === item.name);
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <>
      <div className='work__filters'>
        {projectsNav.map((item, index) => {
          return (
            <span
              key={index}
              className={`${active === index ? 'active-work' : ''} work__item`}
              onClick={(e) => {
                handleClick(e, index);
              }}>
              {item.name}
            </span>
          );
        })}
      </div>
      <div className='work__container container grid'>
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};
export default Works;
