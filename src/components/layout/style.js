import { flexContainer } from '../commons/styles'

export const styles = theme => ({
 
    flexContainer: {
        ...flexContainer,
        flexDirection: 'column'
    },
    mainContainer: {
        height: 'calc(100vh - 85px)'
    }
})