const WorksItems = ({ item }) => {
  console.log(item);
  return (
    <div className='work__card' key={item.id}>
      <h3 className='work__title'>{item.title}</h3>
      <img src={item.image} alt={item.name} className='work__img' />
      <div className='stack__container'>
        {item.stack.map((stackItem, index) => (
          <span className='stack__item' key={index}>
            {stackItem}
          </span>
        ))}
      </div>
      <div className='btn__container'>
        <a href={item.demourl} target='_blank' className='work__button'>
          Demo <i className='bx bx-link-alt work__button-icon'></i>
        </a>
        <a href={item.sourceurl} className='work__button'>
          Source <i className='bx bxl-github work__button-icon'></i>
        </a>
      </div>
    </div>
  );
};
export default WorksItems;
