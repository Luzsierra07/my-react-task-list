import {Box} from "@chakra-ui/react"
function Header () {
    return (
        <div className="task-list">
            <Box font-weight="bold">
            <div className="header">
                <h1>Todo App</h1>
                <h1>Task List</h1>
            </div>
            </Box>
        </div>
    )
}
export default Header;
