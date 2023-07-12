import { UserData } from "@/types/userData";
import s from "./Users.module.css"
import User from "./User/User";
import { Col, Container, Placeholder, Row } from "react-bootstrap";
import { PaginationFunc } from "./Pagination/PaginationFunc"

interface UsersProps {
  users: UserData[],
  pagination: {
    current: number,
    pagesCount: number,
  },
  handleClick(u: number): any,
  isFetching: boolean
}

const Users = (props: UsersProps) => {

  let pages = []

  for (let i = 0; i < props.pagination.pagesCount; i++) {
    pages.push(i + 1);
  }

  let users = props.users?.map(u => {
    return <Row key={u.id} className="gy-2 mx-auto">
        <User user={u} key={u.id} />
    </Row>
  }
  )

  let placeholders = []
  for (let i = 0; i < 10; i++) {
    placeholders.push(<Row className="mx-auto">
      <Placeholder bg="primary" key={i} className={`${s.placeholder} gy-2`} animation="wave" />
    </Row>)
  }


  let maxPages = 5;

  let pageArr = []
  let pCurrent = props.pagination.current
  let pTotal = props.pagination.pagesCount

  if (pTotal > 1) {
    if (pTotal <= maxPages) {
      let i = 1;
      while (i <= pTotal) {
        pageArr.push(i);
        i++;
      }
    } else {
      if (pCurrent <= 3) pageArr = [1, 2, 3, "", pTotal];
      else if (pTotal - pCurrent <= 2)
        pageArr = [
          1,
          "",
          pTotal - 2,
          pTotal - 1,
          pTotal
        ]
      else
        pageArr = [
          1,
          "",
          pCurrent - 1,
          pCurrent,
          pCurrent + 1,
          "",
          pTotal
        ]
    }
  }

  return <Container fluid  >
    <Row >
      {props.isFetching ? placeholders : users}
    </Row>
    <Row className="mx-auto">
      <PaginationFunc pCurrent={pCurrent}
        pTotal={pTotal}
        handleClick={props.handleClick}
        pageArr={pageArr} />
    </Row>
  </Container>

}
export default Users;