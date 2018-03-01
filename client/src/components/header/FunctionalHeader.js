import Header from './Header.jsx';
import { connect } from 'react-redux';
import { VisibilityFilterType, changeVisibilityFilterAction } from '../../reducers/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        showAllChecked: state.visibilityFilterType === VisibilityFilterType.ShowAll,
        showActiveChecked: state.visibilityFilterType === VisibilityFilterType.ShowActive,
        showCompletedChecked: state.visibilityFilterType === VisibilityFilterType.ShowCompleted
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onVisibilityFilterClick: filterType => dispatch(changeVisibilityFilterAction(filterType)),
        onAddTodoItemClick: () => console.log("Show todo item dialog")
    };
}

const FunctionalHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default FunctionalHeader;