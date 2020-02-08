export const invertFilterIsApplied = (selectedFilters, filterToSwitch) => {
  const existingSelectedFilter = selectedFilters.find(
    filter => filter._id === filterToSwitch._id
  );
  // if it's present in the selected filters list, we remove it
  if (existingSelectedFilter) {
    return selectedFilters.filter(
      filter => filter._id !== filterToSwitch._id
    );
  }
  // otherwise we add it
  return [...selectedFilters, {
    ...filterToSwitch
  }];
};