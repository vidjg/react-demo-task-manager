function FilterButtons({ filter, setFilter }) {
  function FilterButton({ children, isClicked, toFilter }) {
    return (
      <button 
        className={"filter-button" + (isClicked ? " clicked" : "")}
        onClick={() => setFilter(toFilter)}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="filter">
      筛选：
      <FilterButton isClicked={filter===0} toFilter={0}>
        全部
      </FilterButton>
      <FilterButton isClicked={filter===1} toFilter={1}>
        未完成
      </FilterButton>
      <FilterButton isClicked={filter===2} toFilter={2}>
        已完成
      </FilterButton>
    </div>
  );
}

export default FilterButtons;
