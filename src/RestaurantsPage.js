import {Box, Header} from 'grommet'
import {A} from 'hookrouter'
function RestaurantsPage (props) {
    return (
        <Box pad="medium">
            <Header>Restaurants</Header>
            <ol>
                <li><A href="/restaurants/1">Restaurant 1</A></li>
                <li><A href="/restaurants/2">Restaurant 2</A></li>
                <li><A href="/restaurants/3">Restaurant 3</A></li>
            </ol>
        </Box>
    )
}

export default RestaurantsPage