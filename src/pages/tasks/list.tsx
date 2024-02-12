import KanbanColumn from './kanban/column'
import { KanbanBoardContainer, KanbanBoard } from './kanban/board'

const List = () => {
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColumn>
            
          </KanbanColumn> 
          <KanbanColumn>

          </KanbanColumn>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  )
}

export default List
