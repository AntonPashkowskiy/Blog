import { connect } from 'react-redux';

import Header from '../../components/header/Header.jsx';
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
        onShowAll: () => dispatch(changeVisibilityFilterAction(VisibilityFilterType.ShowAll)),
        onShowActive: () => dispatch(changeVisibilityFilterAction(VisibilityFilterType.ShowActive)),
        onShowCompleted: () => dispatch(changeVisibilityFilterAction(VisibilityFilterType.ShowCompleted)),
        onAddTodoItemClick: () => dispatch(openAddTodoDialogAction())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
