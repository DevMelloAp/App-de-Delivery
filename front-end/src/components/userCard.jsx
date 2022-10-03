import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React from 'react';
import { removeUserRequest } from '../utils/request';
// import { useDispatch } from 'react-redux';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'left',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const removeUser = () => {
  removeUserRequest(email);
};

function UserCard(props) {
  // const dispatch = useDispatch();
  const { name, email, role, index } = props;

  return (
    <StyledTableRow key={ index }>
      <StyledTableCell
        data-testid={
          `admin_manage__element-user-table-item-number-${index}`
        }
        width="50px"
      >
        { index + 1}

      </StyledTableCell>
      <StyledTableCell
        data-testid={ `admin_manage__element-user-table-name-${index}` }
        width="1000px"
      >
        { name }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `admin_manage__element-user-table-email-${index}`
        }
        width="200px"
      >
        { email }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `admin_manage__element-user-table-role-${index}`
        }
        width="200px"
      >
        { role }

      </StyledTableCell>
      <StyledTableCell>
        <Button
          type="submit"
          variant="contained"
          width="10px"
          color="primary"
          disableElevation
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          onClick={ () => {
            removeUser();
          } }
        >
          Excluir
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

UserCard.propTypes = {
  name: PropTypes.node.isRequired,
  email: PropTypes.node.isRequired,
  role: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};

export default UserCard;
