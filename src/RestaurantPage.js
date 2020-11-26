import {Box, Header} from 'grommet'
import {A} from 'hookrouter'
function RestaurantPage (props) {
    return (
        <Box pad="medium">
            <Header>Restaurant with id {props.id}</Header>
            <A href="/restaurants">back</A>
        </Box>
    )
}

export default RestaurantPage