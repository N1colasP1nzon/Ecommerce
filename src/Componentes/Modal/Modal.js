import * as React from 'react'
import { Dialog, DialogContent } from '@mui/material';
import { Button } from '@mui/material';
import { useState , useEffect } from 'react';

const Modal = ({handleClose, open}) => {
    const [count , setCount] = useState(0)
    useEffect( () => {
    }, [] )
    return(
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogContent>
                    <Button onClick={() => setCount(count-1)}>-</Button>
                        <strong>{count}</strong>
                    <Button onClick={() => setCount(count + 1)} >+</Button>
                </DialogContent>
            </Dialog>
        </div>
        )
}

export default Modal