function FilterButton({ children, isClicked, toFilter, handlerFilter }) {
  if (isClicked) {
    return (
      <button 
        className="filter-button clicked" 
        onClick={() => handlerFilter(toFilter)}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="filter-button"
        onClick={() => handlerFilter(toFilter)}
      >
        {children}
      </button>
    );
  }
}

function FilterButtons({ filter, handlerFilter }) {
  return (
    <div className="filter">
      筛选：
      <FilterButton isClicked={filter==0} toFilter={0} handlerFilter={handlerFilter}>
        全部
      </FilterButton>
      <FilterButton isClicked={filter==1} toFilter={1} handlerFilter={handlerFilter}>
        未完成
      </FilterButton>
      <FilterButton isClicked={filter==2} toFilter={2} handlerFilter={handlerFilter}>
        已完成
      </FilterButton>
    </div>
  );
}

export default FilterButtons;
