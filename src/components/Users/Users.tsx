import { UserData } from "@/types/userData";
import s from "./Users.module.css"
import User from "./User/User";
import { Container, Pagination } from "react-bootstrap";

interface UsersProps {
  users: UserData[],
  pagination: {
    current: number,
    pagesCount: number,
  },
  handleClick(u: number): any;
}

const Users = (props: UsersProps) => {

  let pages = []

  for (let i = 0; i < props.pagination.pagesCount; i++) {
    pages[i] = i + 1;
  }

  let users = props.users?.map(u =>
    <User user={u} key={u.id} />)

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

  return <Container className={s.main}>
    {users}
    <nav className={s.nav_pages}>
      <Pagination>
        {pageArr.map((ele, ind) => {
          const toReturn = []
          if (ind == 0) {
            toReturn.push(<Pagination.First onClick={pCurrent === 1 ? () => { } : () => props.handleClick(1)} href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Pagination.First >)
            toReturn.push(<Pagination.Prev onClick={pCurrent === 1 ? () => { } : () => props.handleClick(pCurrent - 1)} href="#" />)
          }
          if (ele === "") {
            toReturn.push(<Pagination.Ellipsis key={ind} />)
          }
          else {
            toReturn.push(
              <Pagination.Item key={ind} active={pCurrent === ele ? true : false}
                onClick={
                  pCurrent === ele
                    ? () => { }
                    : () => {
                      props.handleClick(ele)
                    }}>
                {ele}
              </Pagination.Item>
            )
          }
          if (ind === pageArr.length - 1) {
            toReturn.push(
              <Pagination.Next
                key={"nextpage"}
                onClick={
                  pCurrent === ele
                    ? () => { }
                    : () => {
                      props.handleClick(pCurrent + 1);
                    }
                }
              />
            );
            toReturn.push(
              <Pagination.Last
                key={"lastpage"}
                onClick={
                  pCurrent === ele
                    ? () => { }
                    : () => {
                      props.handleClick(ele);
                    }
                }
              />
            );
          }
          return toReturn
        })}
      </Pagination>
    </nav>
  </Container>

}
export default Users;