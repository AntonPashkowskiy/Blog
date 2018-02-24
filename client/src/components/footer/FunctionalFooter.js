import Footer from './Footer.jsx';
import { connect } from 'react-redux';
import { SortingType, changeSortingTypeAction } from '../../reducers/actions';

const sortingTypeToIndex = sortingType => sortingType === SortingType.ByDate ? 0 : 1;
const indexToSortingType = index => index === 0 ? SortingType.ByDate : SortingType.ByPriority;

const mapStateToProps = (state, ownProps) => {
    return {
        selectedSorterIndex: sortingTypeToIndex(state.sortingType)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSortingTypeClick: index => {
            let newSortingType = indexToSortingType(index);
            dispatch(changeSortingTypeAction(newSortingType));
        }
    };
}

const FunctionalFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FunctionalFooter;