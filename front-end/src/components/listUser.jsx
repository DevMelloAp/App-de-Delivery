import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import UserCard from './userCard';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 10,
    textAlign: 'centeryy',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const tHead = () => (
  <TableHead>
    <TableRow>
      <StyledTableCell align="center" width="50px">Item</StyledTableCell>
      <StyledTableCell align="center" width="1000px">Nome</StyledTableCell>
      <StyledTableCell width="200px">E-mail</StyledTableCell>
      <StyledTableCell width="200px">Tipo</StyledTableCell>
      <StyledTableCell width="200px">Excluir</StyledTableCell>
    </TableRow>
  </TableHead>
);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ListUser() {
  const userList = [{ name: 'Imar', email: 'imarmendes@gmail.com', role: 'customer' }];
  const classes = useStyles();
  return (
    <div>
      <h1>Lista de usuários</h1>

      <TableContainer component={ Paper }>
        <Table className={ classes.table } size="small" aria-label="a dense table">
          <TableBody>
            { tHead() }
            { userList ? userList.map((user, index) => (
              <div key={ user.name }>
                <UserCard
                  name={ user.name }
                  email={ user.email }
                  role={ user.role }
                  index={ index }
                />
              </div>
            )) : null }
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}

export default ListUser;
