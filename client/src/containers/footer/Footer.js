import { connect } from 'react-redux';

import Footer from '../../components/footer/Footer.jsx';
import { SortingType, changeSortingTypeAction } from '../../reducers/actions';

const sortingTypeToIndex = {
    [SortingType.ByDate]: 0,
    [SortingType.ByPriority]: 1
};

const mapStateToProps = (state, ownProps) => {
    return {
        selectedSorterIndex: sortingTypeToIndex[state.sortingType]
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onByDateClick: () => dispatch(changeSortingTypeAction(SortingType.ByDate)),
        onByPriorityClick: () => dispatch(changeSortingTypeAction(SortingType.ByPriority))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
