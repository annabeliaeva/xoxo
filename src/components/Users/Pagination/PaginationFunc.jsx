import { Pagination } from "react-bootstrap"

export const PaginationFunc = (props) =>{
  return <Pagination>
        {props.pageArr.map((ele, ind) => {
          const toReturn = []
          if (ind == 0) {
            toReturn.push(<Pagination.First onClick={props.pCurrent === 1 ? () => { } : () => props.handleClick(1)} href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Pagination.First >)
            toReturn.push(<Pagination.Prev onClick={props.pCurrent === 1 ? () => { } : () => props.handleClick(props.pCurrent - 1)} href="#" />)
          }
          if (ele === "") {
            toReturn.push(<Pagination.Ellipsis key={ind} />)
          }
          else {
            toReturn.push(
              <Pagination.Item key={ind} active={props.pCurrent === ele ? true : false}
                onClick={
                  props.pCurrent === ele
                    ? () => { }
                    : () => {
                      props.handleClick(ele)
                    }}>
                {ele}
              </Pagination.Item>
            )
          }
          if (ind === props.pageArr.length - 1) {
            toReturn.push(
              <Pagination.Next
                key={"nextpage"}
                onClick={
                  props.pCurrent === ele
                    ? () => { }
                    : () => {
                      props.handleClick(props.pCurrent + 1);
                    }
                }
              />
            );
            toReturn.push(
              <Pagination.Last
                key={"lastpage"}
                onClick={
                  props.pCurrent === ele
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
}
