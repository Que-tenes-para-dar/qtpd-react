import { createSelector } from 'reselect';

const selectOrganization = state => state.organization;

export const selectCenters = createSelector(
    [selectOrganization],
    organization => organization.centers
);

export const selectIsCentersLoaded = createSelector(
    [selectOrganization],
    organization => !!organization.centers
);
