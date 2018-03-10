import Header from './Header.jsx';
import { connect } from 'react-redux';
import {
    VisibilityFilterType,
    changeVisibilityFilterAction,
    openAddTodoDialogAction
} from '../../reducers/actions';

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
        onAddTodoItemClick: () => dispatch(openAddTodoDialogAction())
    };
}

const FunctionalHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default FunctionalHeader;