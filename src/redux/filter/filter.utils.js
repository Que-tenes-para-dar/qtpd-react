export const toggleFilterIsApplied = (selectedFilters, toggledFilter) => {
  const existingSelectedFilter = selectedFilters.find(
    filter => filter._id === toggledFilter._id
  );
  // if it's present in the selected filters list, we remove it
  if (existingSelectedFilter) {
    return selectedFilters.filter(
      filter => filter._id !== toggledFilter._id
    );
  }
  // otherwise we add it
  return [...selectedFilters, {
    ...toggledFilter
  }];
};