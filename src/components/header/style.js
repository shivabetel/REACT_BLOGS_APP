import { flexContainer } from '../commons/styles';

export const styles = theme => ({
    flexContainer: {
        ...flexContainer,
        height: '60px',
        borderBottom: '1px solid #D7D7D7',
        boxShadow: '1px 0px 10px 0px #959595',
        marginBottom: '15px'
    },
    logoContainer: {
        flex: '1 0 70%',
        textAlign: 'center',
        lineHeight: 3,
        color: "#214796",
        fontWeight: 800
    },
    headerLinkCon: {
        flex: '1 0 30%',
        lineHeight: 3
    }
});
