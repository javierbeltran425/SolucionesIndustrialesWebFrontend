import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './DialogDemo.css';

const BrandCard = ({ img, title, text }) => {
    const [displayResponsive, setDisplayResponsive] = useState(false);

    const dialogFuncMap = {
        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name) => {
        dialogFuncMap[`${name}`](true);
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Ok" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return(
        <>
            <div className="dialog-demo mx-4 my-1 cursor-pointer">
                <div className="card">
                    <img src={img} onClick={() => onClick('displayResponsive')} className="w-28"/>
                    <Dialog header={title} visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter('displayResponsive')}>
                        <p>{text}</p>
                    </Dialog>
                </div>
            </div>
        </>
    )
}

export default BrandCard