/**
 * A simplified User details component to help with testing routing.
 *
 * The `data-testid` may be a little confusing, have a look at the testids file
 * that we are importing for an explanation. There is also a
 * `data-testelementid` in the component. This is what you can use for multiple
 * things:
 * - Identifying that the information of the right element is shown (as in this
 * case)
 * - Identifying an element in a list. For example if you want to check a
 * specific row in a list you can add the id and have your test request that
 *
 * In your own projects, feel free to add more `data-*` properties as you see
 * fit. The browser ignores all the data properties, which means you can add as
 * many as you like without worrying about it affecting your app.
 */
import { useParams } from 'react-router-dom'

import TEST_IDS from './testids'

function UserDetails() {
    const { id } = useParams()

    return (
        <div
            data-testid={TEST_IDS.USER_DETAILS_CONTAINER}
            data-testelementid={id}
        >
            This is the User details page
        </div>
    )
}

export default UserDetails
