import {Modal, Box,Paper, Card} from '@mui/material'

const CARD_STYLES = {
    position: 'fixed',
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: 400, 
    height:300,
    bgcolor: 'backround.paper'
}

const BOX_STYLES = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}
function ModalInstance(props){
    CARD_STYLES.height = props.height ? props.height : 400
    CARD_STYLES.width = props.width ? props.width : 400

    return(
        <div className="modal">
            <Modal open={props.open} onClose={props.close} height={props.height} width={props.width}>
                <Paper>
                    <Card sx={CARD_STYLES}>
                    <Box sx={BOX_STYLES}>
                    {props.children}
                    </Box>
                    </Card>

                </Paper>


            </Modal>
        </div>
    )
}


export default ModalInstance; 