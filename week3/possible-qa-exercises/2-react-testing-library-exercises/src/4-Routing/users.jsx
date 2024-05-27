/**
 * A simplified Users component to help with testing routing.
 *
 * The `data-testid` may be a little confusing, have a look at the testids file
 * that we are importing for an explanation.
 */
import TEST_IDS from './testids'

function Users() {
    return (
        <div data-testid={TEST_IDS.USER_LIST_CONTAINER}>
            This is the Users page
        </div>
    )
}

export default Users
